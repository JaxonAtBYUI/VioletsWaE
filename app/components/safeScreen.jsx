import { SafeAreaView, StyleSheet } from "react-native";

/* This is meant to make a view that only includes where it is
   safe to dipslay items on the screen.
*/
export default function SafeScreen({children, style}) {
    
    return (
        <SafeAreaView style={[styles.safeScreen, style]}>
            { children }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeScreen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
  },
})