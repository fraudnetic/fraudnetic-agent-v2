export default class Cookie {
    /**
     * Set cookie
     * @param name - cookie name
     * @param value - cookie value
     * @param days - cookie expiration in days
     *
     * @return void
     * */
    static set(name: string, value: string, days: number): void;
    static setToAll(name: string, value: string): void;
    static get(name: string): string;
    static generateSessionID(): string;
    static getSessionID(): string;
}
