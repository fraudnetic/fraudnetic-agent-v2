export default class Config {
    private static _isDevelopment;
    private static _sessionID;
    static get isDevelopment(): boolean;
    static set isDevelopment(isDevelopment: boolean);
    static get sessionID(): string;
    static set sessionID(sessionID: string);
    private static _host;
    static _userID: string | number;
    static get userID(): string | number;
    static get version(): string;
    static readonly isBrowser: boolean;
}
