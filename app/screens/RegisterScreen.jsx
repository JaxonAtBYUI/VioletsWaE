import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions} from "react-native";
import { useState } from "react";

import TextComponents from "../components/textComponents";
import Interactables from "../components/interactableComponents";
import SafeScreen from "../components/safeScreen";
import KeyboardAvoidingTextInput from "../components/keyboardAvoiding";
import { useNavigation } from "../contexts/NavigationContenxt";
import { pages } from "../dictionaries/pages";

export default function RegisterScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    const [ReEnter, setReEnter] = useState(null);
    const [Email, setEmail] = useState(null);

    const { navigateBack } = useNavigation();

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
            <KeyboardAvoidingTextInput 
            styleContainer={{width: "80%", alignSelf: "center"}}
            placeholder="Username"
            value={Username}
            onChangeText={(value) => setUsername(value)}/>
            <KeyboardAvoidingTextInput 
            styleContainer={{width: "80%", alignSelf: "center"}}
            placeholder="Password"
            value={Password}
            onChangeText={(value) => setPassword(value)}/>
            <KeyboardAvoidingTextInput 
            styleContainer={{width: "80%", alignSelf: "center"}}
            placeholder="Re-enter Password"
            value={ReEnter}
            onChangeText={(value) => setReEnter(value)}/>
            <KeyboardAvoidingTextInput 
            styleContainer={{width: "80%", alignSelf: "center"}}
            placeholder="E-mail"
            value={Email}
            onChangeText={(value) => setEmail(value)}/>
            <View style={styles.buttons}>
                <Interactables.ButtonOpacity style={styles.button}>Register</Interactables.ButtonOpacity>
                <Interactables.ButtonOpacity style={styles.button} action={() => navigateBack(pages.login)}>Go To Login</Interactables.ButtonOpacity>
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