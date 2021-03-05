// Ignore this
export interface IConfig {
    token: string
    delayMS: number
    getMessageConfig: IGetMessage
}
export interface IGetMessage {
    channelId: string,
    limit?: number,
    before?: string,
    after?: string,
    around?: string
}

/*
    Notice: If you want to fully configure getMessageConfig and you are wondering what each does, visit this link: https://abal.moe/Eris/docs/CommandClient#function-getMessages
*/
export const config: IConfig = {
    token: "",
    delayMS: 5000,
    getMessageConfig: {
        channelId: ""
    }
}