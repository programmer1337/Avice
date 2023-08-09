import {Pressable, StyleSheet, Text} from "react-native";
import messageHandler from "../../functions/messageHandler";

function openAiButton({text, setText, setMessages}) {
    return (
        <Pressable style={styles.button}
                   onPress={() => messageHandler(text, setText, setMessages)}
        >
            <Text>Click me</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 3,
        margin: 3,
    }
});

export default openAiButton;