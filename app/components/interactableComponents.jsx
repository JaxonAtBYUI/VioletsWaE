import { StyleSheet, Text, TouchableHighlight, TouchableOpacity , TextInput, } from "react-native";
import PhoneInput from "react-native-phone-number-input";

// Interactable Buttons

/**
 * A touchable button that uses the Touchable Opacitity that is pre styled.
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
            onPress={props.action}
        >
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableHighlight>
    )
}

// Input Fields

/**
 * A styled input field.
 * @param props.placeholder - Placeholder text for the input field.
 * @param props.action - The function that runs whenever the text changes.
 * @param props.style - Styles to overwrite default styling.
 * @returns {React.Component}
 */
function TInputField(props) {
    return (
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.action}
            style={[styles.textInput, props.style]}
        />
    )
}

/**
 * A styled phone number input field.
 * @param props.placeholder - Placeholder text for the input field.
 * @param props.action - The function that runs whenever the text changes.
 * @param props.style - Styles to overwrite default styling.
 * @returns {React.Component}
 */
function PInputField(props) {
    return (
        <PhoneInput
            placeholder={props.placeholder}
            onChangeText={props.action}
            containerStyle={[styles.phoneInputContainer, props.style]}
            textContainerStyle={[styles.phoneTextContainer]}
            textInputStyle={[styles.phoneTextInput]}
            defaultCode="US"
            layout="2nd"
            countryPickerButtonStyle={{display: "none"}}
        />
    )
}

// Wrap all interactables for export
const Interactables = {
    ButtonOpacity,
    ButtonHighlight,
    TInputField,
    PInputField,
}

export default Interactables;

// Styles
const styles = StyleSheet.create({
    buttonOpacity: {
        padding: 10,
        backgroundColor: "palegreen",
        borderRadius: 10,
        alignItems: "center",
    },
    buttonHighlight: {
        padding: 10,
        backgroundColor: "palegreen",
        borderRadius: 10,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    buttonText: {
        fontFamily: "Quicksand",
        fontSize: 28,
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
})