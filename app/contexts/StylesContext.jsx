import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { useFonts } from 'expo-font';
const StylesContext = createContext({});

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
function StylesContextProvider({ children }) {
    const [fontsLoaded] = useFonts({
        'Quicksand': require('../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf'),
    });

    const contextValue = useMemo(() => ({
    fontsLoaded
    }), [fontsLoaded]);
    
    useEffect(() => (console.log(`Fonts loaded: ${fontsLoaded}`)), [fontsLoaded])

    return (
        
        <StylesContext.Provider value={contextValue}>
        {children}
        </StylesContext.Provider>
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
function useStylesContext() {
  const context = useContext(StylesContext);
  if (context === undefined) {
    throw new Error('useStylesContext was used outside of its Provider');
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
function withStylesContext(WrappedComponent) {
  return function NavigationComponent() {
    return (
      <StylesContextProvider>
        <WrappedComponent />
      </StylesContextProvider>
    );
  };
}

export {
    StylesContext,
    StylesContextProvider, 
    useStylesContext,
    withStylesContext,
};