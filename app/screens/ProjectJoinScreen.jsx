import { useState } from "react";
import SafeScreen from "../components/safeScreen";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "../contexts/NavigationContenxt";
import { ScrollView } from "react-native";
import TextComponents from "../components/textComponents";
import Interactables from "../components/interactableComponents";


export default function ProjectJoinScreen() {
    const {joinCode, setJoinCode} = useState();
    
    const { navigateBack } = useNavigation();


    function joinProject() {
        // TODO - Call the database and join the project if you have the correct code.
        navigateBack();
    }

    return (
        <SafeScreen>
            <Header backButton={true} title={"Join Project"}/>
            <ScrollView>
                <TextComponents.H2>Join Code</TextComponents.H2>
                {/* Add Text Field for input */}
                <Interactables.ButtonOpacity action={() => joinProject()}>Join Project</Interactables.ButtonOpacity>
            </ScrollView>
        </SafeScreen>
    )
}