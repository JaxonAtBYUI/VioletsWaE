import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

/**
 * @description A React component that provides a context to its child components.
 * @param {object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the context.
 * @returns {ReactNode} The rendered component.
 * @example
 * import { TemplateContextProvider } from './templateContext';
 *
 * function App() {
 *   return (
 *     <TemplateContextProvider>
 *       // Your app components
 *     </TemplateContextProvider>
 *   );
 * }
 * @example
 * function MyComponent() {
 *   const { value } = useContext(TemplateContext);
 *   // Use value here
 * }
 */
function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    // Set up Firebase Auth state observer
    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          // User is signed in
          setUser(authUser);
        } else {
          // User is signed out
          setUser(null);
        }
      });
  
      // Cleanup function
      return () => unsubscribe();
    }, []);
  
    // Function to log in with email and password
    const loginWithEmailAndPassword = async (email, password) => {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.error('Login Error:', error.message);
      }
    };
    
    // Function to sign up with email and password.
    const signupWithEmailAndPassword = async (email, password, name) => {
        try {
            // Create user with email and password
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        
            // Optionally, you can do additional tasks like updating user profile
            await userCredential.user.updateProfile({
                displayName: 'New User', // Set a default display name
            });
      
            await firestore.collection('users').doc(userCredential.user.uid).set({
                name,
                email,
                phoneNumber: phoneNumber || null, // Optional, set to null if not provided
                projects: [],
            });
      
        } catch (error) {
            console.error('Signup Error:', error.message);
        }
    };
  
    // Function to log out
    const logout = async () => {
      try {
        await firebase.auth().signOut();
      } catch (error) {
        console.error('Logout Error:', error.message);
      }
    };
  
    // Function to get the current user
    const getCurrentUser = () => {
      return firebase.auth().currentUser;
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
  };

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