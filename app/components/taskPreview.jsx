import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import TextComponents from "./textComponents";
import { useNavigation } from "../contexts/NavigationContenxt";
import { pages } from "../dictionaries/pages";


export default function TaskPreview(task) {

    // TODO - This needs a custom navigation just like for the project. 
    // Whatever I do for the project navigation I will likely do for this as well

    const { navigateTo } = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigateTo()}>
            <View>
                <TextComponents.H2>{task.name}</TextComponents.H2>
                <TextComponents.H2>{task.status}</TextComponents.H2>
                <Text>{task.notes ? task.notes : "No task notes."}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
})