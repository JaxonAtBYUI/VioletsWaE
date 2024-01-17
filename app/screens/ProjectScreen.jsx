import { View, ScrollView, TouchableOpacity, Image } from "react-native";

import SafeScreen from "../components/safeScreen";
import Header from "../components/header";
import Footer from "../components/footer";
import TextComponents from "../components/textComponents";
import TaskPreview from "../components/taskPreview";

export default function ProjectScreen() {
    // TODO - Create something that checks that the project is defined, otherwise automatically 
    // reroute back to the project selection screen and notify the user that there was an issue loading
    // the project. 

    
    
    const project = testData

    return (
        <SafeScreen>
            <Header backButton={true} title={project.name} />
            <ScrollView>
                <View>
                    <TextComponents.H2>Tasks</TextComponents.H2>
                    <TextComponents.H3>Date of Event: {project.date}</TextComponents.H3>
                    <TouchableOpacity>
                        <Image 
                        socurce={{
                            width: 40,
                            height: 40,
                            uri: `https://picsum.photos/${40}`
                        }} />
                    </TouchableOpacity>
                </View>
                {/* TODO - Eventually I will want to sort them in the order of Incomplete, In Progress, Complete */}
                {project.tasks.map((task, index) => (
                    <TaskPreview task={task} key={index} />
                ))}
            </ScrollView>
            <Footer />
        </SafeScreen>
    )
}

// Temp project just to help with rendering
const testData = {
    name: "Test Wedding",
    date: "1/1/2024",
    tasks: [
        {
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
        },
        {
            name: "Catering",
            type: "catering",
            status: "In Progress",
            notes: "Reaching out about potential catering with Terry's Italian",
            venderLinked: false,
            venderInformation: {},
        },
        {
            name: "Florist",
            type: "Incomplete",
            status: "Incomplete",
            notes: "",
            venderLinked: false,
            venderInformation: {},
        }
    ]
}