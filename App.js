import AppLoading from 'expo-app-loading';

import { components } from './app/dictionaries/components';

// Contexts
import { withStylesContext, useStylesContext } from './app/contexts/StylesContext';
import { withNavigation, useNavigation } from './app/contexts/NavigationContenxt';



function App() {
    const { page } = useNavigation();

    const {fontsLoaded} = useStylesContext();
    
    const Component = components[page]
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <Component />
    );
}


// Wrap the application in contexts
function withWrappers(WrappedComponent) {
    return withNavigation (
        withStylesContext(
            WrappedComponent
        )
    ) 
}
const WrappedApplicaiton  = withWrappers(App);
export default WrappedApplicaiton;