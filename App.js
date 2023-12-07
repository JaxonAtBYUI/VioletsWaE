import { StyleSheet, Text, View, SafeAreaView, Image, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { withStylesContext, useStylesContext } from './app/contexts/StylesContext';

// Screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AccountScreen from './app/screens/AccountScreen';


function App() {
    const {fontsLoaded} = useStylesContext();

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <AccountScreen />
    );
}


// Wrap the application in contexts
function withWrappers(WrappedComponent) {
    return withStylesContext(
        WrappedComponent
    )
}

export default withWrappers(App);
