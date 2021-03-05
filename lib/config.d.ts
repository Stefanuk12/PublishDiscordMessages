export interface IConfig {
    token: string;
    delayMS: number;
    getMessageConfig: IGetMessage;
}
export interface IGetMessage {
    channelId: string;
    limit?: number;
    before?: string;
    after?: string;
    around?: string;
}
export declare const config: IConfig;
//# sourceMappingURL=config.d.ts.map