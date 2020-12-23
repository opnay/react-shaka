import { MutableRefObject } from 'react';

export type ValuesToUnion<T> = T[keyof T];

export type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;
