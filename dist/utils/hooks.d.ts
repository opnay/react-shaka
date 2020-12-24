import { EffectCallback } from 'react';
import { ForwardedRef } from './types';
export declare function useMount(func: EffectCallback): void;
export declare function useInnerRef<T>(ref: ForwardedRef<T>): import("react").RefObject<T>;
