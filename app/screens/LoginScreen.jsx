import { StyleSheet, Text, View, Image, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import TextComponents from '../components/textComponents';
import Interactables from '../components/interactableComponents';
import KeyboardAvoidingTextInput from '../components/flexibleKeyboardInput';
import SafeScreen from '../components/safeScreen';
import { useNavigation } from '../contexts/NavigationContenxt';
import { pages } from '../dictionaries/pages';
import { useUser } from '../contexts/UserContext';
import { colorPallet } from '../dictionaries/styling';
import ErrorBubble from '../components/errorbubble';

export default function LoginScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Email, setEmail] = useState(null);
    const [Password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState(null); 
    const { navigateTo } = useNavigation()
    const { loginWithEmailAndPassword  } = useUser();

    async function login() {
        try {
            await loginWithEmailAndPassword(Email, Password);
            navigateTo(pages.projectSelection);
        } catch (error) {
            setLoginError(true);
        }
    }

    return (
        <SafeScreen style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={{
                    width: screenWidth * .4,
                    height: screenWidth * .4,
                    uri: `https://picsum.photos/${screenWidth}`
                }} />
                <TextComponents.H1>Login</TextComponents.H1>
            </View>
            <KeyboardAvoidingTextInput 
            placeholder={"E-mail"}
            onChangeText={(value) => {setEmail(value)}}
            styleContainer={styles.input}
            value={Email} />

            <KeyboardAvoidingTextInput
            placeholder={"Password"}
            onChangeText={(value) => setPassword(value)}
            styleContainer={styles.input}
            value={Password} 
            secureTextEntry={true} />

            <View style={styles.buttons}>
                <Interactables.ButtonOpacity 
                    style={styles.button} 
                    action={() => login()}>Login</Interactables.ButtonOpacity>
                <Interactables.ButtonOpacity 
                    style={styles.button}
                    action={() => navigateTo(pages.register)}>Register</Interactables.ButtonOpacity>
            </View>
            {loginError && <ErrorBubble message='There was an error logging in.'/>
            }
        </SafeScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'flex-start',  // Change this line to align to the top
        alignItems: 'center',
    },
    logo: { 
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    fields: {
        flex: 1,
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
        
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        width: "80%",
        borderColor: colorPallet.accent,
        alignSelf: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        backgroundColor: "white",
        fontSize: 16,
        fontFamily: "Quicksand-Regular"
    },
    buttons: {
        flexDirection: "row",
        width: "80%",
        marginTop: 10,
        gap: 15,
        justifyContent: "space-between",
        alignSelf: "center",
    },
    button: {
        flex: 1,
    },
})