import React, { createContext, useContext, useState, useEffect } from 'react';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

const UserContext = createContext({});

// Initialize MongoDB Realm App
const appId = process.env.EXPO_PUBLIC_MONGODB_APP_ID;
const client = Stitch.initializeDefaultAppClient(appId);

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Set up MongoDB Realm Auth state observer
  useEffect(() => {
    const authListener = client.auth.addAuthListener((auth) => {
      if (auth.isLoggedIn) {
        setUser(auth.user);
      } else {
        setUser(null);
      }
    });

    return () => authListener.remove(); // Cleanup function
  }, []);

  // Function to log in with email and password
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      await client.auth.loginWithCredential(new UserPasswordCredential(email, password));
    } catch (error) {
      console.error('Login Error:', error.message);
    }
  };

  // Function to sign up with email and password
  const signupWithEmailAndPassword = async (email, password, name) => {
    try {
      const user = await client.auth.registerUser({
        email,
        password,
      });

      // Optionally, you can update user profile
      await client.auth.loginWithCredential(new UserPasswordCredential(email, password));

      // Add user data to MongoDB collection
      const usersCollection = client
        .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
        .db('your-database-name')
        .collection('users');

      await usersCollection.insertOne({
        _id: user.id,
        name,
        email,
        projects: [],
      });
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };

  // Function to log out
  const logout = async () => {
    try {
      await client.auth.logout();
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

  // Function to get the current user
  const getCurrentUser = () => {
    return client.auth.isLoggedIn ? client.auth.user : null;
  };

  // Expose context values
  const contextValues = {
    user,
    loginWithEmailAndPassword,
    signupWithEmailAndPassword,
    logout,
    getCurrentUser,
  };

  return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
}

/**
 * Custom hook that allows components to access the context provided by the TemplateContext context object.
 * @returns {Object} The current value of the TemplateContext context object.
 * @throws {Error} If used outside of its Provider.
 * @example
 * import { useTemplateContext } from './useNavigationContext';
 *
 * function MyComponent() {
 *   const {value} = useTemplateContext();
 *
 *   // Use the value here
 *   // ...
 * }
 */
function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser was used outside of its Provider');
  }
  return context;
}
/**
 * Higher-order component that wraps a component with the TemplateContextProvider.
 * This HOC provides the wrapped component with access to the template context,
 * allowing it to navigate between different pages and manage the template history.
 * @param {React.Component} WrappedComponent - The component to be wrapped with the NavigationContextProvider.
 * @returns {React.Component} - The wrapped component with access to the template context.
 */
function withUser(WrappedComponent) {
  return function UserComponent() {
    return (
      <UserContextProvider>
        <WrappedComponent />
      </UserContextProvider>
    );
  };
}

export {
  UserContext, UserContextProvider, useUser, withUser,
};