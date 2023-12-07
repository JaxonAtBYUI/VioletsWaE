import { View, SafeAreaView, StyleSheet, Image } from 'react-native'
import TextComponents from './textComponents'


/**
 * @param {boolean} backButton A boolean determining if the back button will be rendered.
 * @param {string} title A boolean determining if the back button will be rendered.
 * @returns {React.Component}
 */
export default function TopBar(props) {
    const backButton = props.backButton
    const title = props.title


    return (
        <View style={styles.topBarContainer}>
            {backButton ? 
            <View style={styles.backbuttonContainer}>
                <Image
                source={{
                    width: 40,
                    height: 40,
                    uri: `https://picsum.photos/${40}`
                }} />
            </View> :
            null}
            <TextComponents.H1 style={styles.title}>{props.title}</TextComponents.H1>
            <View style={styles.profileContainer}>
                <Image
                    source={{
                        width: 40,
                        height: 40,
                        uri: `https://picsum.photos/${40}`
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        backgroundColor: "blue",
        height: 60,
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },
    backbuttonContainer: {
        padding: 10,
    },
    title: {
        paddingLeft: 10,
        marginRight: "auto"
    },
    profileContainer: {
        padding: 10,
        alignSelf: "flex-end"
    },
})