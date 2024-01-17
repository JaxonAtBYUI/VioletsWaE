import { useState } from "react";
import SafeScreen from "../components/safeScreen";
import TextComponents from "../components/textComponents";
import { Dropdown } from "react-native-element-dropdown";
import { Text } from "react-native";
import Interactables from "../components/interactableComponents";
import { useNavigation } from "../contexts/NavigationContenxt";
import { ScrollView } from "react-native-web";
import Header from "../components/header";


export default function TaskScreen(task) {
    const task = testTask;

    
    const {name, setName} = useState(task.name);
    const {type, setType} = useState(task.type);
    const {status, setStatus} = useState(task.status);
    const {notes, setNotes} = useState(task.notes);
    const {venderLinked, setVenderLinked} = useState(task.venderLinked)
    const {venderNotes, setVenderNotes} = useState(task.venderNotes);
    
    const { navigateBack } = useNavigation();
    
    function  saveAndExit() {
        // TODO - Save the new values to the project value
        navigateBack();
    }
    
    // TODO - If the task is null, notify the user and navigate back
    // TODO - Figure out how to include a vender selection system.
    
    return (
        // TODO - Do what all the comments below say.
        <SafeScreen>
            <Header backButton={true} title={"Task View"} />
            <ScrollView>
                {/* Make this into an editable text field */}
                <TextComponents.H1>{name}</TextComponents.H1>
                {/* This needs to be a dropdown with all different types of tasks */}
                <TextComponents.H3>Task Type</TextComponents.H3>
                <Text>{type}</Text>
                {/* This needs to be a dropdown with options: Incomplete, In Progress, Complete */}
                <TextComponents.H3>Status:</TextComponents.H3>
                <Text>{status}</Text>
                {/* This should be a text input field for taking notes. */}
                <TextComponents.H3>Notes</TextComponents.H3>
                <Text>{notes}</Text>
                {/* THIS IS WHERE THE VENDER SELECTION DISPLAY WILL GO
                        This will either display the notes in an editable text field if no vender is selected
                        If a vender is selected it will instead show uneditable vender information as a vender will have been linked
                    The should be a button to bring you to a vender selection page.*/}
                <Interactables.ButtonOpacity action={() => saveAndExit()}>Confirm Changes</Interactables.ButtonOpacity>
            </ScrollView>
        </SafeScreen>
    )
}

// Temporary Task for testing the component
const testTask = {
    name: "Venue",
    type: "venue",
    status: "Complete",
    notes: "climb fish rocky local of die doubt game great",
    venderLinked: true,
    venderInformation: {
        name: "Mattie Roberts Wedding Venue",
        location: "123 Main St. City ST 86822",
        contactInformation: {
            email: "ta@jul.gy",
            phone: "571-809-1022"
        },
    },
    venderNotes: "construction apart tax sound pet broken wooden product",
}