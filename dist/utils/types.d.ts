import { MutableRefObject } from 'react';
export declare type ValuesToUnion<T> = T[keyof T];
export declare type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;
