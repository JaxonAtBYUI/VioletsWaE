import { StyleSheet, Text, View, SafeAreaView, Image, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { withStylesContext, useStylesContext } from './app/contexts/StylesContext';

import WelcomeScreen from './app/screens/WelcomeScreen';

function App() {
    const {fontsLoaded} = useStylesContext();

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <WelcomeScreen />
    );
}


// Wrap the application in contexts
function withWrappers(WrappedComponent) {
    return withStylesContext(
        WrappedComponent
    )
}

export default withWrappers(App);
