import shaka from 'shaka-player';
import { ValuesToUnion } from '../types';

export function isBrowserShakaSupported() {
  return shaka.Player.isBrowserSupported();
}

export const DRMKeySystem = {
  CLEAR_KEY: 'org.w3.clearkey',
  FAIRPLAY: 'com.apple.fps.1_0',
  PLAYREADY: 'com.microsoft.playready',
  WIDEVINE: 'com.widevine.alpha',
};
export type DRMKeySystem = ValuesToUnion<typeof DRMKeySystem>;

export const Robustness = {
  SW_SECURE_CRYPTO: 'SW_SECURE_CRYPTO',
  SW_SECURE_DECODE: 'SW_SECURE_DECODE',
  HW_SECURE_CRYPTO: 'HW_SECURE_CRYPTO',
  HW_SECURE_DECODE: 'HW_SECURE_DECODE',
  HW_SECURE_ALL: 'HW_SECURE_ALL',
} as const;
export type Robustness = ValuesToUnion<typeof Robustness>;
