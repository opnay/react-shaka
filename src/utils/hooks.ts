import { EffectCallback, MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';
import { ForwardedRef } from './types';

export function useMount(func: EffectCallback) {
  useLayoutEffect(func, []);
}

export function useInnerRef<T>(ref: ForwardedRef<T>) {
  const innerRef = useRef<T>(null);
  useEffect(() => {
    if (!ref || !innerRef.current) {
      return;
    }

    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else if (typeof ref === 'object') {
      (ref as MutableRefObject<T>).current = innerRef.current;
    }
  }, [innerRef, ref]);

  return innerRef;
}
