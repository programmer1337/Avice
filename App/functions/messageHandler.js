import openAiCaller from "../api/openAiFetch";

export default function messageHandler(text, setText, setMessages) {
    if (text !== "") {
        setText("")
        setMessages(prevMessages => [...prevMessages, {
            text: text,
            sender: "Me",
            message_key: Math.random(),
        }])
        openAiCaller(text).then(aviceResponse => {
            let AviceMessage = {
                text: aviceResponse.data.choices[0].message.content,
                sender: "Avice",
                message_key: Math.random(),
            }
            setMessages(prevMessages => [...prevMessages, AviceMessage]);
        });
    }
}