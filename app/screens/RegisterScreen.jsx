import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions} from "react-native";
import { useState } from "react";

import TextComponents from "../components/textComponents";
import Interactables from "../components/interactableComponents";
import SafeScreen from "../components/safeScreen";

export default function RegisterScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Username, useUsername] = useState(null);
    const [Password, usePassword] = useState(null);
    const [ReEnter, useReEnter] = useState(null);
    const [Email, useEmail] = useState(null);


    return (
        <SafeScreen style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={{
                        width: screenWidth * .6,
                        height: screenWidth * .6,
                        uri: `https://picsum.photos/${screenWidth}`
                    }} />
                <TextComponents.H1>Register</TextComponents.H1>
            </View>
            <View style={styles.fields}>
                <Interactables.TInputField 
                   style={{width: "80%"}}
                   placeholder="Username"
                   action = {(value) => useUsername(value)} 
                />
                <Interactables.TInputField 
                   style={{width: "80%"}}
                   placeholder="Password"
                   action = {(value) => usePassword(value)} 
                />
                <Interactables.TInputField 
                   style={{width: "80%"}}
                   placeholder="Re-enter Password"
                   action = {(value) => useReEnter(value)} 
                />
                <Interactables.TInputField 
                   style={{width: "80%"}}
                   placeholder="Email"
                   action = {(value) => useEmail(value)} 
                />
            </View>
            <View style={styles.buttons}>
                <Interactables.ButtonOpacity style={styles.button}>Register</Interactables.ButtonOpacity>
                <Interactables.ButtonOpacity style={styles.button}>Go To Login</Interactables.ButtonOpacity>
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    logo: {
        flex: 1.1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    fields: {
        flex: .9,
        backgroundColor: "gold",
        width: "100%",
    },
    buttons: {
        flex: .2,
        display: "flex",
        width: "100%",
        backgroundColor: "aqua",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        justifyContent: "center",
        height: 60,
    }

})