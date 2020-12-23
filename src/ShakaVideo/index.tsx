import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import * as shaka from 'shaka-player';
import { classNames } from '../utils/browser';
import { useInnerRef, useMount } from '../utils/hooks';

export interface ShakaProps {
  uri: string;
  config?: string | object;
  licenseRequestHeaders?: Map<string, string> | { [x: string]: string };
  onLoad?(): void;
  onRequestFilter?: shaka.extern.RequestFilter;
  onResponseFilter?: shaka.extern.ResponseFilter;
}

export type ShakaVideoProps = ShakaProps & ComponentPropsWithoutRef<'video'>;
const ShakaVideoRender = (props: ShakaVideoProps, forwardRef: ForwardedRef<shaka.Player>) => {
  const {
    uri,
    config,
    licenseRequestHeaders,
    onLoad,
    onRequestFilter,
    onResponseFilter,
    className,
    ...restProps
  } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  const innerRef = useInnerRef(forwardRef);

  useMount(() => {
    if (!videoRef.current) {
      return;
    }

    // Polyfill for shaka-player
    shaka.polyfill.installAll();

    // Create shaka.Player
    const { current: element } = videoRef;
    const player = new shaka.Player(element);
    (innerRef as MutableRefObject<shaka.Player>).current = player;
    player.load(uri).then(onLoad);

    return () => {
      player.destroy();
    };
  });

  const headers = useMemo(() => {
    if (typeof licenseRequestHeaders === 'object') {
      return new Map(Object.entries(licenseRequestHeaders));
    }

    return licenseRequestHeaders;
  }, [licenseRequestHeaders]);

  useEffect(() => {
    if (!innerRef.current) {
      return;
    }

    const { current: player } = innerRef;
    if (config) {
      player.configure(config);
    }

    if (headers || onRequestFilter) {
      player.getNetworkingEngine()?.registerRequestFilter((type, request) => {
        if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
          headers?.forEach((it, key) => {
            request.headers[key] = it;
          });
        }

        onRequestFilter?.(type, request);
      });
    }

    if (onResponseFilter) {
      player.getNetworkingEngine()?.registerResponseFilter(onResponseFilter);
    }

    return () => {
      player.getNetworkingEngine()?.clearAllRequestFilters();
      player.getNetworkingEngine()?.clearAllResponseFilters();
    };
  }, [uri, config, headers, onLoad, onRequestFilter]);

  const names = useMemo(() => classNames('shaka', className), [className]);
  return <video ref={videoRef} className={names} {...restProps} />;
};

export default forwardRef<shaka.Player, ShakaVideoProps>(ShakaVideoRender);
