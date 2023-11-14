import { StyleSheet, Text } from 'react-native'
// Creating various styled components based upon HTML tags.

function H1(props) {
    return (
        <Text style={[styles.H1, props.style]}>{props.children}</Text>
    )
}

function H2(props) {
    return (
        <Text style={[styles.H2, props.style]}>{props.children}</Text>
    )
}

function H3(props) {
    return (
        <Text style={[styles.H3, props.style]}>{props.children}</Text>
    )
}

function H4(props) {
    return (
        <Text style={[styles.H4, props.style]}>{props.children}</Text>
    )
}

function H5(props) {
    return (
        <Text style={[styles.H5, props.style]}>{props.children}</Text>
    )
}

function H6(props) {
    return (
        <Text style={[styles.H6, props.style]}>{props.children}</Text>
    )
}

const TextComponents = {
    H1, H2, H3, H4, H5, H6
}

export default TextComponents


// Styles
const styles = StyleSheet.create({
    H1: {
        fontSize: 32,
        fontWeight: "bold"
    },
    H2: {
        fontSize: 24,
        fontWeight: "bold"
    },
    H3: {
        fontSize: 18.72,
        fontWeight: "bold"
    },
    H4: {
        fontSize: 16,
        fontWeight: "bold"
    },
    H5: {
        fontSize: 13.28,
        fontWeight: "bold"
    },
    H6: {
        fontSize: 10.72,
        fontWeight: "bold"
    }
})