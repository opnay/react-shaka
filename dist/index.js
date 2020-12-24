var _shakaPlayer3 = require("shaka-player");

var _shakaPlayer = $parcel$exportWildcard({}, _shakaPlayer3);

var _shakaPlayer2 = $parcel$interopDefault(_shakaPlayer3);

var _react2 = require("react");

var _react = $parcel$interopDefault(_react2);

var _forwardRef = _react2.forwardRef;
var useEffect = _react2.useEffect;
var useMemo = _react2.useMemo;
var useRef = _react2.useRef;
var useLayoutEffect = _react2.useLayoutEffect;

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });
  return dest;
}

function $fc4fea2479c6cdde16992a136c8d$export$classNames() {
  for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return names.filter(function (it) {
    return it !== null && it !== undefined;
  }).join(' ');
}

function $eb5d0fdbe7282e0ba8d91cdb1d6490be$var$_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    $eb5d0fdbe7282e0ba8d91cdb1d6490be$var$_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    $eb5d0fdbe7282e0ba8d91cdb1d6490be$var$_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return $eb5d0fdbe7282e0ba8d91cdb1d6490be$var$_typeof(obj);
}

function $eb5d0fdbe7282e0ba8d91cdb1d6490be$export$useMount(func) {
  useLayoutEffect(func, []);
}

function $eb5d0fdbe7282e0ba8d91cdb1d6490be$export$useInnerRef(ref) {
  var innerRef = useRef(null);
  useEffect(function () {
    if (!ref || !innerRef.current) {
      return;
    }

    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else if ($eb5d0fdbe7282e0ba8d91cdb1d6490be$var$_typeof(ref) === 'object') {
      ref.current = innerRef.current;
    }
  }, [innerRef, ref]);
  return innerRef;
}

function $bfbcea346bb0392db852c5a3a93c5f$var$_extends() {
  $bfbcea346bb0392db852c5a3a93c5f$var$_extends = Object.assign || function (target) {
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

  return $bfbcea346bb0392db852c5a3a93c5f$var$_extends.apply(this, arguments);
}

function $bfbcea346bb0392db852c5a3a93c5f$var$_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    $bfbcea346bb0392db852c5a3a93c5f$var$_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    $bfbcea346bb0392db852c5a3a93c5f$var$_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return $bfbcea346bb0392db852c5a3a93c5f$var$_typeof(obj);
}

function $bfbcea346bb0392db852c5a3a93c5f$var$_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = $bfbcea346bb0392db852c5a3a93c5f$var$_objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function $bfbcea346bb0392db852c5a3a93c5f$var$_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var $bfbcea346bb0392db852c5a3a93c5f$var$ShakaVideoRender = function ShakaVideoRender(props, forwardRef) {
  var uri = props.uri,
      config = props.config,
      licenseRequestHeaders = props.licenseRequestHeaders,
      onLoad = props.onLoad,
      onRequestFilter = props.onRequestFilter,
      onResponseFilter = props.onResponseFilter,
      className = props.className,
      restProps = $bfbcea346bb0392db852c5a3a93c5f$var$_objectWithoutProperties(props, ["uri", "config", "licenseRequestHeaders", "onLoad", "onRequestFilter", "onResponseFilter", "className"]);
  var videoRef = useRef(null);
  var innerRef = $eb5d0fdbe7282e0ba8d91cdb1d6490be$export$useInnerRef(forwardRef);
  $eb5d0fdbe7282e0ba8d91cdb1d6490be$export$useMount(function () {
    if (!videoRef.current) {
      return;
    } // Polyfill for shaka-player


    _shakaPlayer.polyfill.installAll(); // Create shaka.Player


    var element = videoRef.current;
    var player = new _shakaPlayer.Player(element);
    innerRef.current = player;
    player.load(uri).then(onLoad);
    return function () {
      player.destroy();
    };
  });
  var headers = useMemo(function () {
    if ($bfbcea346bb0392db852c5a3a93c5f$var$_typeof(licenseRequestHeaders) === 'object') {
      return new Map(Object.entries(licenseRequestHeaders));
    }

    return licenseRequestHeaders;
  }, [licenseRequestHeaders]);
  useEffect(function () {
    if (!innerRef.current) {
      return;
    }

    var player = innerRef.current;

    if (config) {
      player.configure(config);
    }

    if (headers || onRequestFilter) {
      var _player$getNetworking;

      (_player$getNetworking = player.getNetworkingEngine()) === null || _player$getNetworking === void 0 ? void 0 : _player$getNetworking.registerRequestFilter(function (type, request) {
        if (type === _shakaPlayer.net.NetworkingEngine.RequestType.LICENSE) {
          headers === null || headers === void 0 ? void 0 : headers.forEach(function (it, key) {
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

    return function () {
      var _player$getNetworking3, _player$getNetworking4;

      (_player$getNetworking3 = player.getNetworkingEngine()) === null || _player$getNetworking3 === void 0 ? void 0 : _player$getNetworking3.clearAllRequestFilters();
      (_player$getNetworking4 = player.getNetworkingEngine()) === null || _player$getNetworking4 === void 0 ? void 0 : _player$getNetworking4.clearAllResponseFilters();
    };
  }, [uri, config, headers, onLoad, onRequestFilter]);
  var names = useMemo(function () {
    return $fc4fea2479c6cdde16992a136c8d$export$classNames('shaka', className);
  }, [className]);
  return /*#__PURE__*/_react.createElement("video", $bfbcea346bb0392db852c5a3a93c5f$var$_extends({
    ref: videoRef,
    className: names
  }, restProps));
};

var ShakaVideo = /*#__PURE__*/_forwardRef($bfbcea346bb0392db852c5a3a93c5f$var$ShakaVideoRender);

exports.ShakaVideo = ShakaVideo;

function isBrowserShakaSupported() {
  return _shakaPlayer2.Player.isBrowserSupported();
}

exports.isBrowserShakaSupported = isBrowserShakaSupported;
var DRMKeySystem = {
  CLEAR_KEY: 'org.w3.clearkey',
  FAIRPLAY: 'com.apple.fps.1_0',
  PLAYREADY: 'com.microsoft.playready',
  WIDEVINE: 'com.widevine.alpha'
};
exports.DRMKeySystem = DRMKeySystem;
var Robustness = {
  SW_SECURE_CRYPTO: 'SW_SECURE_CRYPTO',
  SW_SECURE_DECODE: 'SW_SECURE_DECODE',
  HW_SECURE_CRYPTO: 'HW_SECURE_CRYPTO',
  HW_SECURE_DECODE: 'HW_SECURE_DECODE',
  HW_SECURE_ALL: 'HW_SECURE_ALL'
};
exports.Robustness = Robustness;
