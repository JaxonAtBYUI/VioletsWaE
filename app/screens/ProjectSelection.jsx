import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import SafeScreen from "../components/safeScreen";
import TopBar from "../components/topBar";
import ProjectSummary from "../components/projectSummary";
import Interactables from "../components/interactableComponents";
import { pages } from "../dictionaries/pages";
import { useNavigation } from "../contexts/NavigationContenxt";


export default function ProjectSelectionScreen() {
    
    const { projects, setProjects } = useState([]); 
    
    const { navigateTo } = useNavigation()

    //TODO - On loading up of this page, the project details need to be retrieved from the database for displaying

    return (
        <SafeScreen>
            <TopBar title={"Poject Selection"} backButton={false} />
            <ScrollView>
                {projects.map((project, index) => (
                    <ProjectSummary project={project} key={item} />
                ))}
                <Interactables.ButtonOpacity style={newEventButton} action={() => navigateTo(pages.projectCreation)}>Start Event</Interactables.ButtonOpacity>
            </ScrollView>
        </SafeScreen>
    )
}

const styles = StyleSheet.create({
    newEventButton: {

    }
})