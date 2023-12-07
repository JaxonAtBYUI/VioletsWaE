import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'

import TextComponents from '../components/textComponents';
import Interactables from '../components/interactableComponents';
import SafeScreen from '../components/safeScreen';

export default function WelcomeScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Username, useUsername] = useState(null);
    const [Password, usePassword] = useState(null);

    return (
        <SafeScreen style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={{
                    width: screenWidth * .85,
                    height: screenWidth * .85,
                    uri: `https://picsum.photos/${screenWidth}`
                }} />
                <TextComponents.H1>Login</TextComponents.H1>
            </View>
            <View style={styles.fields}>
                <Interactables.TInputField
                    style={styles.input}
                    placeholder={"Username"}
                    action={(value) => useUsername(value)}
                />
                <Interactables.TInputField
                    style={styles.input}
                    placeholder={"Password"}
                    action={(value) => usePassword(value)}
                />
                <View style={styles.buttons}>
                    <Interactables.ButtonHighlight style={styles.button}>Login</Interactables.ButtonHighlight>
                    <Interactables.ButtonOpacity style={styles.button}>Register</Interactables.ButtonOpacity>
                </View>
                <Text>Username: {Username}</Text>
                <Text>Password: {Password}</Text>
            </View>
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
        flex: 1.5,  
        width: "100%",
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
    },
    button: {
        flex: 1
    }
})