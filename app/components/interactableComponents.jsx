import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    TextInput,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from "react-native";
import { colorPallet } from "../dictionaries/styling";


// Interactable Buttons

/**
 * A touchable button that uses the Touchable Opacity that is pre styled.
 * @param props.style - Can take in styles to overwrite default styling. 
 * @param props.action - The function that will be run when the button is pressed.
 * @returns {React.Component}
 */
function ButtonOpacity(props) {
    return (
        <TouchableOpacity 
            activeOpacity={.7} 
            style={[styles.buttonOpacity, props.style]}
            onPress={props.action}
        >
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

function ButtonHighlight(props) {
    return (
        <TouchableHighlight 
        style={[styles.buttonHighlight, props.style]}
        onPress={props.action}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableHighlight>
    )
}

/**
 * A styled input field.
 * @param props.placeholder - Placeholder text for the input field.
 * @param props.action - The function that runs whenever the text changes.
 * @param props.style - Styles to overwrite default styling.
 * @returns {React.Component}
 */
function TInputField(props) {
    return (
        // Make it so that if the user taps off the box that it unfocuses the input.
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.action}
            style={[styles.textInput, props.style]}/>
    )
}

// Wrap all interactables for export
const Interactables = {
    ButtonOpacity,
    ButtonHighlight,
    TInputField,
}

export default Interactables;

// Styles
const styles = StyleSheet.create({
    buttonOpacity: {
        padding: 10,
        backgroundColor: colorPallet.lPrimary,
        borderRadius: "50%",
        alignItems: "center",
    },
    buttonHighlight: {
        padding: 10,
        backgroundColor: colorPallet.lPrimary,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    buttonText: {
        fontFamily: "Quicksand-Medium",
        fontSize: 28,
        color: "white",
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        width: "100%",
        borderColor: "#777",
        alignSelf: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        backgroundColor: "white",
        fontSize: 16,
        fontFamily: "Quicksand"
    },
    
    // Phone Input Garbage
    dismiss: {
        width: "100%",
        flex: 1,
        height: "100%",
        backgroundColor: "yellow"
    },
    phoneInputContainer: {
        width: "100%",
        backgroundColor: "FFFFFF00"
    },
    phoneTextContainer: {
        backgroundColor: "green",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#777",
        padding: "0",

    },
    phoneTextInput: {
        backgroundColor: "dodgerblue",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 0,
        width: '100%',
        height: "100%",
    },
    dismiss: {
        width: "100%",
        height: "100%",

    }
});