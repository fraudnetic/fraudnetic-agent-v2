export default class Agent {
    static getTimeZone(): number;
    static ua(): string;
    static isFirefox(): boolean;
    private static getAvailableResolution;
    private static getColorDepth;
    static getCurrentResolution(): string;
    static isFunctionNative(func: (...args: unknown[]) => unknown): boolean;
    static countTruthy(values: unknown[]): number;
    static isSafariWebKit(): boolean;
    static isWebKit616OrNewer(): boolean;
    static isWebKit(): boolean;
    private static getScreenPrint;
    private static getFontsList;
    private static getTextWidth;
    static getFontFingerprint(): string;
    static getDetailedWebGLReport(): string;
    static getCanvasFingerprint(): {
        fingerprint: string;
        confidence: number;
        components: {
            canvas: string | null;
            environment: string;
            canvasBlocked: boolean;
            canvasUnstable: boolean;
            imageNoised: boolean;
            drawHashes: string[];
        };
    };
    static getFontsFingerprint(): number;
    static getWebGLOptions(gl: WebGLRenderingContext): string;
    static getWebGLOptionsValues(gl: WebGLRenderingContext): string;
    static getWebGLSpecialOptionsValues(gl: WebGLRenderingContext): string;
    static getMathFingerprintSinOnly(): string;
    static getCSSFingerprint(): string;
    static getWebGLFingerprint(): number;
    static isIncognito(): Promise<boolean>;
    static getAudioFingerprint(): Promise<string>;
    static isCookieEnabled(): boolean;
    static getPeriodicWaveFingerprint(): Promise<number>;
    /**
     * @see https://gitlab.torproject.org/legacy/trac/-/issues/13018
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=531915
     */
    static getMathFingerprint(): number;
    static getBrowserFingerprint(): Promise<number>;
    private static validateOSDetection;
    private static getOSFromAPIs;
    static getDeviceMetadata(): Promise<{
        browser_name: string;
        browser_version: string;
        os_name: string;
        os_version: string;
        device_type: string;
        cookies: boolean;
        device_is_rooted: boolean;
        user_agent: string;
    }>;
}
