// Dependencies
import { CommandClient, Message } from "eris"

// Configuration
import { config, IGetMessage } from "./config"

// Client
const client = new CommandClient(config.token)

// Delay function
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

// Get All Messsages
async function getAllMessages(config: IGetMessage){
    const allMessages = await client.getMessages(config.channelId, config.limit, config.before, config.after, config.around)
    return allMessages
}

// Publish All Messages
async function publishMessages(messages: Array<Message>){
    for (const message of messages){
        await client.crosspostMessage(config.getMessageConfig.channelId, message.id)
        console.log(`[+] Published message: ${message.content} by ${message.author.username}#${message.author.discriminator}`)
        await delay(config.delayMS)
    }
}

// Commence
async function commencePublish(){
    const allMessages = await getAllMessages(config.getMessageConfig)
    await publishMessages(allMessages)
}

// On Ready
client.on("ready", () => {
    console.log("Ready. Commencing now...")
    commencePublish()
})

// Connect
client.connect()