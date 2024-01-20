import AppLoading from 'expo-app-loading';

import { components } from './app/dictionaries/components';

// Contexts
import { withStylesContext, useStylesContext } from './app/contexts/StylesContext';
import { withNavigation, useNavigation } from './app/contexts/NavigationContenxt';
import { withUser } from './app/contexts/UserContext';
// import { withUser, useUser } from './app/contexts/UserContext';


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
    return (    
        withUser(    
            withNavigation (
                    withStylesContext(
                        WrappedComponent
                    )
                )
        ) 
    )
}
const WrappedApplicaiton  = withWrappers(App);
export default WrappedApplicaiton;