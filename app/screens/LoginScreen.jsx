import { StyleSheet, Text, View, Image, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import TextComponents from '../components/textComponents';
import Interactables from '../components/interactableComponents';
import KeyboardAvoidingTextInput from '../components/keyboardAvoiding';
import SafeScreen from '../components/safeScreen';
import { useNavigation } from '../contexts/NavigationContenxt';
import { pages } from '../dictionaries/pages';

export default function LoginScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);

    const { navigateTo } = useNavigation()
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
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', width: "100%"}} behavior="padding" enabled   keyboardVerticalOffset={100}>
                <ScrollView style={{backgroundColor:"orange", width: "100%", height: "100%"}}>
                    <Interactables.TInputField style={styles.input} placeholder="Username"></Interactables.TInputField>
                    <Interactables.TInputField style={styles.input} placeholder="Username"></Interactables.TInputField>
                    <Interactables.TInputField style={styles.input} placeholder="Username"></Interactables.TInputField>
                    <Interactables.TInputField style={styles.input} placeholder="Username"></Interactables.TInputField>
                <View style={styles.buttons}>
                    <Interactables.ButtonOpacity 
                        style={styles.button} 
                        action={() => navigateTo()}>Login</Interactables.ButtonOpacity>
                    <Interactables.ButtonOpacity 
                        style={styles.button}
                        action={() => navigateTo(pages.register)}>Register</Interactables.ButtonOpacity>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
            {/* <KeyboardAvoidingTextInput 
            placeholder={"Username"}
            onChangeText={(value) => setUsername(value)}
            styleContainer={{width: "80%"}}
            value={Username} />
            <KeyboardAvoidingTextInput
            placeholder={"Password"}
            onChangeText={(value) => setPassword(value)}
            styleContainer={{width: "80%"}}
            value={Password} /> */}
        </SafeScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: { 
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    fields: {
        flex: 1,
        backgroundColor: "gold",
        width:"100%",
        alignItems: "center",
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        width: "80%",
        borderColor: "#777",
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
        flex: 1
    }
})