import { ScrollView } from "react-native-web";
import Footer from "../components/footer";
import Header from "../components/header";
import SafeScreen from "../components/safeScreen";


export default function CommunicationScreen() {

    // TODO - Get the texts related to the conversation from the server and order then by newest to oldest

    return (
        <SafeScreen>
            <Header title={"Communicate"} backButton={false}/>
            <ScrollView>
                 {/*This is where the texts will load into.  */}
            </ScrollView>
            <Footer />
        </SafeScreen>
    )
}