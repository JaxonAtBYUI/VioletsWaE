import { StyleSheet, Text } from 'react-native'


// Header Tags
/**
 * A text component styled as an H1 tag.
 * @param props.style - Can take any styling to overwrite default styles
 * @returns {React.Component}
 */
function H1(props) {
    return (
        <Text style={[styles.H1, props.style]}>{props.children}</Text>
    )
}

/**
 * A text component styled as an H2 tag.
 * @param props.style - Can take any styling to overwrite default styles
 * @returns {React.Component}
 */
function H2(props) {
    return (
        <Text style={[styles.H2, props.style]}>{props.children}</Text>
    )
}

/**
 * A text component styled as an H3 tag.
 * @param props.style - Can take any styling to overwrite default styles
 * @returns {React.Component}
 */
function H3(props) {
    return (
        <Text style={[styles.H3, props.style]}>{props.children}</Text>
    )
}

/**
 * A text component styled as an H4 tag.
 * @param props.style - Can take any styling to overwrite default styles
 * @returns {React.Component}
 */
function H4(props) {
    return (
        <Text style={[styles.H4, props.style]}>{props.children}</Text>
    )
}

/**
 * A text component styled as an H5 tag.
 * @param props.style - Can take any styling to overwrite default styles
 * @returns {React.Component}
 */
function H5(props) {
    return (
        <Text style={[styles.H5, props.style]}>{props.children}</Text>
    )
}

/**
 * A text component styled as an H6 tag.
 * @param props.style - Can take any styling to overwrite default styles
 * @returns {React.Component}
 */
function H6(props) {
    return (
        <Text style={[styles.H6, props.style]}>{props.children}</Text>
    )
}


// Wrap all text components for export
const TextComponents = {
    H1, H2, H3, H4, H5, H6
}

export default TextComponents

// Styles
const styles = StyleSheet.create({
    H1: {
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    },
    H2: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    },
    H3: {
        fontSize: 18.72,
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    },
    H4: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    },
    H5: {
        fontSize: 13.28,
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    },
    H6: {
        fontSize: 10.72,
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    }
})