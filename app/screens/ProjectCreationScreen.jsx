import { ScrollView } from "react-native";

import ProjectPreview from "../components/projectPreview";
import SafeScreen from "../components/safeScreen";
import TextComponents from "../components/textComponents";
import TopBar from "../components/topBar";
import Interactables from "../components/interactableComponents";

import { useNavigation } from "../contexts/NavigationContenxt";
import { pages } from "../dictionaries/pages";
import { Dropdown } from "react-native-element-dropdown";


export default function ProjectCreationScreen() {

    const { navigateTo } = useNavigation();
    
    function createProject() {
        // Create project
        // Save to Database
        // Verify it was saved
            // IF NOT verified: notify user using error message.
            // ELSE navigate back to the project selection screen
        navigateTo({/**TODO*/})
    }

    return (
        <SafeScreen>
            <TopBar backButton={false} title="Project Creation" />
            <ScrollView>
                <TextComponents.H3>Event Name</TextComponents.H3>
                {/* TODO */}
                <TextComponents.H3>Event Type</TextComponents.H3>
                <Dropdown />
                <TextComponents.H3>Event Template</TextComponents.H3>
                <Dropdown />
                <TextComponents.H3>Preview</TextComponents.H3>
                <ProjectPreview items={[]}/>
                <Interactables.ButtonOpacity action={() => createProject()}>Create Event</Interactables.ButtonOpacity>

            </ScrollView>
        </SafeScreen>
    )
}