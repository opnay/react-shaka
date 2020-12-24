import { ValuesToUnion } from '../types';
export declare function isBrowserShakaSupported(): boolean;
export declare const DRMKeySystem: {
    CLEAR_KEY: string;
    FAIRPLAY: string;
    PLAYREADY: string;
    WIDEVINE: string;
};
export declare type DRMKeySystem = ValuesToUnion<typeof DRMKeySystem>;
export declare const Robustness: {
    readonly SW_SECURE_CRYPTO: "SW_SECURE_CRYPTO";
    readonly SW_SECURE_DECODE: "SW_SECURE_DECODE";
    readonly HW_SECURE_CRYPTO: "HW_SECURE_CRYPTO";
    readonly HW_SECURE_DECODE: "HW_SECURE_DECODE";
    readonly HW_SECURE_ALL: "HW_SECURE_ALL";
};
export declare type Robustness = ValuesToUnion<typeof Robustness>;
