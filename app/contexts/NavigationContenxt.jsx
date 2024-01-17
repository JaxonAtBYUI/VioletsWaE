import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { pages } from '../dictionaries/pages';

// Set the default landing page here
const defaultLanding = pages.login

const Navigation = createContext({});
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
function NavigationProvider({ children }) {

    const stack = useRef([defaultLanding])
    const [page, setPage] = useState(defaultLanding);
    
    function navigateTo(newPage) {
        if (!Object.values(pages).includes(newPage)) {
            console.log(`${newPage} is not a valid page.`);
            return
        }

        stack.current.push(newPage)
        setPage(newPage)
    }

    function navigateBack() {
        if (stack.current.length < 1) {
            console.log("No remaining page to navigate to.")
            return
        }

        stack.current.pop()
        setPage(stack.current.slice(-1)[0])
    }
    
    function resetNavigation() {
        stack.current = [defaultLanding]
    }

    function toggleNavigation(newPage) {
        if (!Object.values(pages).includes(newPage)) {
            console.log(`${newPage} is not a valid page.`);
            return
        }
        
        stack.current.pop()
        stack.current.push(newPage)
        setPage(newPage)
    }

    const contextValue = useMemo(() => ({
        navigateTo, navigateBack, resetNavigation, toggleNavigation, page,
    }), [page]);
    
    return (
        <Navigation.Provider value={contextValue}>
            {children}
        </Navigation.Provider>
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
function useNavigation() {
    const context = useContext(Navigation);
    if (context === undefined) {
        throw new Error('useNavigation was used outside of its Provider');
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
function withNavigation(WrappedComponent) {
  return function NavigationComponent() {
    return (
      <NavigationProvider>
        <WrappedComponent />
      </NavigationProvider>
    );
  };
}

export {
    Navigation, NavigationProvider, useNavigation, withNavigation,
};



/*
This is what the App should eventually look like?
import { useNavigationContext } from NavigationContext.jsx

export default function App() {

    const { component } = useNavigationContext();

    return(
        <component />
    )
}

Adding a nav button?
import { useNavigationContext } from NavigationContext.jsx

export default StupidScreen() {

    const { navigateTo, pages } = useNavigationContext();

    return (
        <button onPress={() => {navigateTo(pages.login)}}/> // navigation button
    )
}

*/