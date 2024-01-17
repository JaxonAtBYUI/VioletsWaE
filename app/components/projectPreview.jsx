import { ScrollView } from "react-native"

export default function ProjectPreview({ items }) {
    return (
        <ScrollView>
            {items.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </ScrollView>   
    );
}

const styles = StyleSheet.create({})