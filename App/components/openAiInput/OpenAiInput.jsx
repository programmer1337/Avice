import {TextInput, StyleSheet, Platform} from "react-native";

function OpenAiInput({text, onChange}) {
    return (
        <TextInput
            multiline
            rows={4}
            textAlignVertical="top"
            style={styles.input}
            value={text}
            onChangeText={onChange}
            placeholder={"Введите запрос"}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 0,
        padding: 6,
        margin: 3,

        ...Platform.select({
            web: {
                outlineStyle: 'none',
                width: "40vh",
            },
            android: {
                width: "80%",
            },
            ios:{
                width: "80%",
                height: "20vh",
            }
        }),

    },
    scroll:{
        width: 1,
    }
});

export default OpenAiInput;