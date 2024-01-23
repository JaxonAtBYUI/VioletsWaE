import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useUser } from "./UserContext";

const DatabaseContext = createContext({});

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
function DatabaseContextProvider({ children }) {
  // This context must be wrapped in the auth context.
  const { User } = useUser();

  async function getUserData() {
    // Function for getting data from the "users" collection.
    return;
  }

  async function getProjects() {
    // Function that returns all projects the user is a part of.
    return;
  }

  async function getProject() {
    // Return the project the user selects from the list of items to work on.
  }

  return (
    <DatabaseContext.Provider value={contextValue}>
      {children}
    </DatabaseContext.Provider>
  );
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
function useDatabaseContext() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error("useDatabaseContext was used outside of its Provider");
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
function withDatabaseContext(WrappedComponent) {
  return function NavigationComponent() {
    return (
      <DatabaseContextProvider>
        <WrappedComponent />
      </DatabaseContextProvider>
    );
  };
}

export {
  DatabaseContext,
  DatabaseContextProvider,
  useDatabaseContext,
  withDatabaseContext,
};
