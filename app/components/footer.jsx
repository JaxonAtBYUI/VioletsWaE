import { StyleSheet, View, TouchableOpacity } from "react-native"
import { useNavigation } from "../contexts/NavigationContenxt"
import { pages } from "../dictionaries/pages"

export default function Footer() {
    const { toggleNavigation } = useNavigation()

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => toggleNavigation(pages.projectScreen)}>
                    <Image 
                    socurce={{
                        width: 40,
                        height: 40,
                        uri: `https://picsum.photos/${40}`
                      }} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => toggleNavigation()}>
                    <Image 
                    socurce={{
                        width: 40,
                        height: 40,
                        uri: `https://picsum.photos/${40}`
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

