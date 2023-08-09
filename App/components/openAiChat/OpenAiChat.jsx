import {StyleSheet, View, Text, FlatList, Platform, SafeAreaView, StatusBar} from "react-native";
import React, {memo} from "react";

const Message = memo(({message,  sender}) => (
    <View
        style={
            sender === "Avice"?
                [styles.messageContainer, styles.aviceMessage] :
                [styles.messageContainer, styles.myMessages]
        }>
        <Text style={styles.message}>
        {message}
        </Text>
    </View>
))
const keyExtractor = (item) => item?.message_key;
const renderItem = ({item}) => {
    return(<Message
        key={item.message_key}
        message={item.text}
        sender={item.sender}
    />);
};

const OpenAiChat = ({messages}) => {
    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={styles.list}
                data={messages}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        display: "flex",
        paddingTop: "10%",
    },
    messageContainer: {
        display: "flex",
    },
    message: {
        display: "flex",

        margin: 2,
        padding: 2,

        ...Platform.select({
            web: {
                cursor: 'default',
            }
        }),

        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
    myMessages: {
        display: "flex",
        alignItems: "flex-end",
    },
    aviceMessage: {
        display: "flex",
        alignItems: "flex-start",
    }
});

export default OpenAiChat;