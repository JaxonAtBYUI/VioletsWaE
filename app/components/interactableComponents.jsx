import { StyleSheet, Text, TouchableHighlight, TouchableOpacity , TextInput} from "react-native";

function ButtonOpacity(props) {
    return (
        <TouchableOpacity style={[styles.buttonOpacity, props.style]}>
            <Text>{props.children}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonOpacity: {
        
    }
})