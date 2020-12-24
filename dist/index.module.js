import _shakaPlayer2, * as _shakaPlayer from "shaka-player";
import _react, { forwardRef as _forwardRef, useEffect, useMemo, useRef, useLayoutEffect } from "react";

function $aafeb833d5bd86ec2e01fc07e5eef0$export$classNames(...names) {
  return names.filter(it => it !== null && it !== undefined).join(' ');
}

function $fbdb94139017c0ebe95283daeb9e0e$export$useMount(func) {
  useLayoutEffect(func, []);
}

function $fbdb94139017c0ebe95283daeb9e0e$export$useInnerRef(ref) {
  const innerRef = useRef(null);
  useEffect(() => {
    if (!ref || !innerRef.current) {
      return;
    }

    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else if (typeof ref === 'object') {
      ref.current = innerRef.current;
    }
  }, [innerRef, ref]);
  return innerRef;
}

function $be4cd50af575502ab3568cc2a2917cd$var$_extends() {
  $be4cd50af575502ab3568cc2a2917cd$var$_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return $be4cd50af575502ab3568cc2a2917cd$var$_extends.apply(this, arguments);
}

const $be4cd50af575502ab3568cc2a2917cd$var$ShakaVideoRender = (props, forwardRef) => {
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
  const videoRef = useRef(null);
  const innerRef = $fbdb94139017c0ebe95283daeb9e0e$export$useInnerRef(forwardRef);
  $fbdb94139017c0ebe95283daeb9e0e$export$useMount(() => {
    if (!videoRef.current) {
      return;
    } // Polyfill for shaka-player


    _shakaPlayer.polyfill.installAll(); // Create shaka.Player


    const {
      current: element
    } = videoRef;
    const player = new _shakaPlayer.Player(element);
    innerRef.current = player;
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

    const {
      current: player
    } = innerRef;

    if (config) {
      player.configure(config);
    }

    if (headers || onRequestFilter) {
      var _player$getNetworking;

      (_player$getNetworking = player.getNetworkingEngine()) === null || _player$getNetworking === void 0 ? void 0 : _player$getNetworking.registerRequestFilter((type, request) => {
        if (type === _shakaPlayer.net.NetworkingEngine.RequestType.LICENSE) {
          headers === null || headers === void 0 ? void 0 : headers.forEach((it, key) => {
            request.headers[key] = it;
          });
        }

        onRequestFilter === null || onRequestFilter === void 0 ? void 0 : onRequestFilter(type, request);
      });
    }

    if (onResponseFilter) {
      var _player$getNetworking2;

      (_player$getNetworking2 = player.getNetworkingEngine()) === null || _player$getNetworking2 === void 0 ? void 0 : _player$getNetworking2.registerResponseFilter(onResponseFilter);
    }

    return () => {
      var _player$getNetworking3, _player$getNetworking4;

      (_player$getNetworking3 = player.getNetworkingEngine()) === null || _player$getNetworking3 === void 0 ? void 0 : _player$getNetworking3.clearAllRequestFilters();
      (_player$getNetworking4 = player.getNetworkingEngine()) === null || _player$getNetworking4 === void 0 ? void 0 : _player$getNetworking4.clearAllResponseFilters();
    };
  }, [uri, config, headers, onLoad, onRequestFilter]);
  const names = useMemo(() => $aafeb833d5bd86ec2e01fc07e5eef0$export$classNames('shaka', className), [className]);
  return /*#__PURE__*/_react.createElement("video", $be4cd50af575502ab3568cc2a2917cd$var$_extends({
    ref: videoRef,
    className: names
  }, restProps));
};

export var ShakaVideo = /*#__PURE__*/_forwardRef($be4cd50af575502ab3568cc2a2917cd$var$ShakaVideoRender);
export function isBrowserShakaSupported() {
  return _shakaPlayer2.Player.isBrowserSupported();
}
export const DRMKeySystem = {
  CLEAR_KEY: 'org.w3.clearkey',
  FAIRPLAY: 'com.apple.fps.1_0',
  PLAYREADY: 'com.microsoft.playready',
  WIDEVINE: 'com.widevine.alpha'
};
export const Robustness = {
  SW_SECURE_CRYPTO: 'SW_SECURE_CRYPTO',
  SW_SECURE_DECODE: 'SW_SECURE_DECODE',
  HW_SECURE_CRYPTO: 'HW_SECURE_CRYPTO',
  HW_SECURE_DECODE: 'HW_SECURE_DECODE',
  HW_SECURE_ALL: 'HW_SECURE_ALL'
};
