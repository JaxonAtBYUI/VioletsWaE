import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { DismissKeyboard } from "./interactableComponents";
/* This is meant to make a view that only includes where it is
   safe to display items on the screen.
*/
export default function SafeScreen({children, style}) {
    
    return (
        <SafeAreaView style={[styles.safeScreen, style]}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={[styles.safeScreen, style]}>
                    { children }
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeScreen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
        backgroundColor: "green",
    },
})