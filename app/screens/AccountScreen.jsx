import { StyleSheet, View, Image, Dimensions } from "react-native";

import SafeScreen from "../components/safeScreen";
import TextComponents from "../components/textComponents";
import Interactables from "../components/interactableComponents";
import TopBar from "../components/topBar";
import KeyboardAvoidingTextInput from "../components/keyboardAvoiding.jsx";

export default function AccountScreen() {
    const screenWidth = Dimensions.get("screen").width
    return (
        <SafeScreen style={styles.container}>
            <TopBar  backButton={true} title="Account"/>
            <View style={styles.profilePic}>
                <Image 
                    source={{
                    width: screenWidth * .85,
                    height: screenWidth * .85,
                    uri: `https://picsum.photos/${screenWidth}`
                    }}
                />
            </View>
                <KeyboardAvoidingTextInput placeholder="Name" action={null} styleContainer={styles.fields}/>
                <KeyboardAvoidingTextInput placeholder="E-mail" action={null} styleContainer={styles.fields}/>
                <KeyboardAvoidingTextInput placeholder="Phone Number" action={null} styleContainer={styles.fields}/>
        </SafeScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "tomato",
        display: "flex",
        alignItems: "center",
    },
    profilePic: {
        marginTop: 20,
        backgroundColor: "gold",
        borderRadius: "200%",
        overflow: "hidden",
    },
    fields: {
        backgroundColor: "gold",
        width: "85%"
    }

})