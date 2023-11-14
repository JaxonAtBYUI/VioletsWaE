import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextComponents from '../components/textComponents';
import { Button } from 'react-native-web';


export default function WelcomeScreen() {
    const screenWidth = Dimensions.get("screen").width
    const [Username, useUsername] = useState(null);
    const [Password, usePassword] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={{
                    width: screenWidth * .85,
                    height: screenWidth * .85,
                    uri: `https://picsum.photos/${screenWidth}`
                }} />
                <TextComponents.H1 style={{fontFamily: "Quicksand"}}>Login</TextComponents.H1>
            </View>
            <View style={styles.fields}>
                <TextInput style={styles.input}
                    placeholder='Username'
                    onChangeText={(value) => useUsername(value)}
                />
                <TextInput style={styles.input}
                    placeholder='Password'
                    onChangeText={(value) => usePassword(value)}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        fontFamily: "Quicksand",
        
    },
    logo: {
        flex: 1.5,  
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    fields: {
        flex: 1,
        backgroundColor: "gold",
        width:"100%",
        alignItems: "center",
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        width: "80%",
        borderColor: "#777",
        alignSelf: "center",
        padding: 20,
        margin: 10,
        backgroundColor: "white"
    },
    buttons: {
        flexDirection: "row",
        width: "80%",
        marginTop: 10,
        justifyContent: "space-around",
    }
})