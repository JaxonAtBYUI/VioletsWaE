import { View, StyleSheet, Image, Dimensions} from "react-native";
import { useState } from "react";

import TextComponents from "../components/textComponents";
import Interactables from "../components/interactableComponents";
import SafeScreen from "../components/safeScreen";
import KeyboardAvoidingTextInput from "../components/flexibleKeyboardInput";
import ErrorBubble from "../components/errorbubble";

import { useNavigation } from "../contexts/NavigationContenxt";
import { pages } from "../dictionaries/pages";
import { colorPallet } from "../dictionaries/styling";
import { useUser } from "../contexts/UserContext";

export default function RegisterScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [ReEnter, setReEnter] = useState('');
    const [registerError, setRegisterError] = useState('');

    const { navigateBack } = useNavigation();
    const { signupWithEmailAndPassword } = useUser();

    function isValidName() {
        const noNumberRegex = /^[^\d]+$/;
        const containsLetterRegex = /[a-zA-Z]/;
        
        if (Name === '') {
            setRegisterError("Please enter a name.");
            return false;
        }

        if (!noNumberRegex.test(Name)) {
            setRegisterError("Name cannot contain numbers.");
            return false;
        }

        if (!containsLetterRegex.test(Name)) {
            setRegisterError("Name must contain at least one letter.");
            return false;
        }

        return true;
    }

    function isValidEmail() {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (!emailRegex.test(Email)) {
            setRegisterError("Please Enter a valid E-Mail address.")
            return false;
        }

        return true;
    }

    function isValidPassword() {
        const spacesRegex = /\s/
        const commonPasswordsRegex = /^(?:password|123456|qwerty|admin|letmein|welcome|monkey|123abc|12345|123321|passw0rd|password1|admin123|root123|abc123|qazwsx|qwertyuiop|1q2w3e4r|123qwe|qwerty123|password123|p@ssw0rd|adminadmin|admin1234|adminadmin123|adminpassword|iloveyou|sunshine|starwars|football|baseball|soccer|basketball|hockey|chocolate|superman|batman|1234abcd|abcd1234|trustno1|1234qwer|qwertyui|letmein123|welcome123|password1234|qwerty1234)$/i;
        const consecutiveNumbersRegex = /(0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)/;
        const consecutiveLettersRegex = /(abcd|bcde|cdef|defg|efgh|fghi|ghij|hijk|ijkl|jklm|klmn|lmno|mnop|nopq|opqr|pqrs|qrst|rstu|stuv|tuvw|uvwx|vwxy|wxyz)/i;
        const consecutiveKeyboardRegex = /^(?=.*(?:qwer|wert|erty|rtyu|tyui|yuio|uiop|asdf|sdfg|dfgh|fghj|ghjk|hjkl|zxcv|xcvb|cvbn|vbnm|rewq|trew|ytre|uytr|iuyt|oiuy|poiu|fdsa|gfds|hgfd|jghf|kjgh|lkjh|vcxz|bcxz|nbvc|mnvb|mnbv|mlkj)).*$/i;


        if (Password === '') {
            setRegisterError("You must enter a password.");
            return false;
        }

        if (ReEnter === '') {
            setRegisterError("Please Re-Enter your password.");
            return false;
        }

        if (Password !== ReEnter) {
            setRegisterError("The passwords do not match.");
            return false;
        }

        if (Password.length < 8) {
            setRegisterError("The password must be 8 characters or more.");
            return false;
        }

        if (spacesRegex.test(Password)) {
            setRegisterError("Password must not contain spaces.")
            return false;
        }
        
        if (commonPasswordsRegex.test(Password)) {
            setRegisterError("The password cannot be a common password (i.e. password, querty, etc.)");
            return false;
        }

        if (consecutiveNumbersRegex.test(Password) || consecutiveLettersRegex.test(Password)) {
            setRegisterError("The password cannot contain more than 4 consecutive letters or numbers.");
            return false;
        }

        if (consecutiveKeyboardRegex.test(Password)) {
            setRegisterError("The Password cannot contain more than 4 consecutive characters on the keyboard.");
            return false;
        }

        return true;
    }

    async function registerUser() {
        // Run checks that data is valid.
        if (!isValidName()) return;
        if (!isValidEmail()) return;
        if (!isValidPassword()) return;

        // Sign up user
        try {
            await signupWithEmailAndPassword(Email, Password, Name);
        } catch (error) {
            setRegisterError("There was an error registering the user.");
            console.log(error);      
            return;
        }

        navigateBack();
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
                <TextComponents.H1>Register</TextComponents.H1>
            </View>

            <KeyboardAvoidingTextInput 
            styleContainer={styles.input}
            placeholder="Name"
            value={Name}
            onChangeText={(value) => setName(value)}/>
            
            <KeyboardAvoidingTextInput 
            styleContainer={styles.input}
            placeholder="E-mail"
            value={Email}
            onChangeText={(value) => setEmail(value)}/>

            <KeyboardAvoidingTextInput 
            styleContainer={styles.input}
            placeholder="Password"
            value={Password}
            onChangeText={(value) => setPassword(value)}/>

            <KeyboardAvoidingTextInput 
            styleContainer={styles.input}
            placeholder="Re-enter Password"
            value={ReEnter}
            onChangeText={(value) => setReEnter(value)}/>


            <View style={styles.buttons}>
                <Interactables.ButtonOpacity style={styles.button} action={() => registerUser()}>Register</Interactables.ButtonOpacity>
                <Interactables.ButtonOpacity style={styles.button} action={() => navigateBack(pages.login)}>To Login</Interactables.ButtonOpacity>
            </View>

            {registerError && <ErrorBubble message={registerError} />
            }
        </SafeScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: { 
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
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