import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native"

import TextComponents from "./textComponents"
import { useNavigation } from "../contexts/NavigationContenxt";
import { pages } from "../dictionaries/pages";


export default function ProjectSummary(project) {
    const { navigateTo } = useNavigation();

    // TODO - define logic for getting collaborators and tasks from project object
    const collaborator = []
    const tasks = []

    /**
     * A function that sets the current project and navigates to the page that displays it.
     */
    function navProject(projectId) {
        // TODO - Set project and navigate to it (potentially talk to peter about best way?? Context? Custom Navigation? idk)
        // navigateTo()
        return
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => navProject(project.id) }>
            <View>
                <TextComponents.H3>{project.title}</TextComponents.H3>
                <TextComponents.H2>{project.date}</TextComponents.H2>
                <View>
                    <TextComponents.H4>Collaborators</TextComponents.H4>
                    {collaborators.slice(0, 3).map((collaborator, index) => (
                        <Text key={index}>{collaborator}</Text>
                        ))}
                </View>
                <View>
                    <TextComponents.H4>Tasks</TextComponents.H4>
                    {tasks.slice(0, 3).map((task, index) => (
                        <Text key={index}>{task}</Text>
                        ))}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

// TODO - Style this
const styles = StyleSheet.create({
    cardContainer : {

    },
})