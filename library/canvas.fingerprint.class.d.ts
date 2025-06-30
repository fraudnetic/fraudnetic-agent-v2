export default class CanvasFingerprint {
    private canvas;
    private readonly context;
    private readonly drawCount;
    private readonly imageNoised;
    constructor(drawCount?: number);
    private isCanvasBlocked;
    private applyNoise;
    private draw;
    private getMajorityHash;
    private getEnvironmentEntropy;
    getFingerprint(): {
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
}
