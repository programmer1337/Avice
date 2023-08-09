import OpenAiChat from "../openAiChat/OpenAiChat";
import OpenAiInput from "../openAiInput/OpenAiInput";
import OpenAiButton from "../openAiButton/OpenAiButton";
import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

function OpenAiForm() {
    const [text, setText] = useState("");
    const onChange = (text) => {
        setText(text)
    }
    const [messages, setMessages] = useState([
        {text: "Напишите сообщение", sender: "Avice", message_key: Math.random()}
    ])

    return (
        <View style={styles.form}>
            <View style={styles.form__chat_container}>
                <OpenAiChat messages={messages}/>
            </View>
            <View style={styles.form__bottom}>
                <OpenAiInput text={text} onChange={onChange}/>
                <OpenAiButton text={text} setText={setText}
                              setMessages={setMessages}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        width: '100%',
        height: '100%',

        display: "flex",
    },
    form__bottom: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "5%",
    },
    form__chat_container:{
        width: '95%',
        flex: 1,

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '1%',
    }
});

export default OpenAiForm;