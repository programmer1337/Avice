import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
})
configuration.baseOptions.headers = {
    Authorization: "Bearer " + process.env.EXPO_PUBLIC_API_KEY,
}
const openAiApi = new OpenAIApi(configuration);

export default async function openAiCaller(userMessage) {
    try {
        const openAiResponse = await openAiApi.createChatCompletion(
            {
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: userMessage}],
            }
        )
        return await openAiResponse;
    }catch (e){
        return [];
    }
}

