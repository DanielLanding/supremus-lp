(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/modelolanding1/components/cursor-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorProvider",
    ()=>CursorProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f40$cursorify$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f40$cursorify$2f$cursors$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
function CursorProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f40$cursorify$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorifyProvider"], {
        enabled: true,
        cursor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f40$cursorify$2f$cursors$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhingerCursor"],
        delay: 10,
        opacity: 1,
        defaultCursorVisible: false,
        breakpoint: 768,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/modelolanding1/components/cursor-provider.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = CursorProvider;
var _c;
__turbopack_context__.k.register(_c, "CursorProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/useCursorify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useCursorify = void 0;
const CursorifyProvider_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)");
const useCursorify = ()=>{
    const state = (0, CursorifyProvider_1.useCursorifyState)();
    return {
        style: state.cursorStyle,
        mouseState: state.mouseState
    };
};
exports.useCursorify = useCursorify;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/DefaultCursor/DefaultCursor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultCursor = void 0;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const useCursorify_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/useCursorify.js [app-client] (ecmascript)");
const DefaultCursor = ({ disabled })=>{
    const { style } = (0, useCursorify_1.useCursorify)();
    return (0, jsx_runtime_1.jsx)("div", {
        style: {
            width: '23px',
            height: '23px',
            borderRadius: '50%',
            transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out, background-color 0.1s ease-in-out',
            backgroundColor: !disabled && style === 'pointer' ? 'rgba(210, 210, 210, 0.4)' : 'rgba(210, 210, 210, 0.8)',
            transform: !disabled && style === 'pointer' ? 'scale(2.3)' : 'scale(1)'
        }
    });
};
exports.DefaultCursor = DefaultCursor;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/DefaultCursor/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/DefaultCursor/DefaultCursor.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/useDefaultCursorVisibleEffect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const __1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)");
const useDefaultCursorVisibleEffect = ()=>{
    const { defaultCursorVisible } = (0, __1.useCursorifyState)();
    (0, react_1.useEffect)(()=>{
        const style = document.createElement('style');
        style.innerHTML = defaultCursorVisible ? `` : `
      * {
        cursor: none !important;
      }
    `;
        document.head.appendChild(style);
        return ()=>{
            document.head.removeChild(style);
        };
    }, [
        defaultCursorVisible
    ]);
    return;
};
exports.default = useDefaultCursorVisibleEffect;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/useMouseMoveEffect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const __1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)");
/*
const getCursorStyleFromTagName = (tagName: string): CursorStyle => {
  switch (tagName) {
    case 'A':
      return 'pointer'
    case 'P':
    case 'H1':
    case 'H2':
    case 'H3':
    case 'H4':
    case 'H5':
    case 'H6':
    case 'SPAN':
      return 'text'
    default:
      return 'default'
  }
}
*/ const useMouseMoveEffect = (mouseRef)=>{
    const { delay, opacity } = (0, __1.useCursorifyState)();
    const dispatch = (0, __1.useCursorifyDispatch)();
    const endX = (0, react_1.useRef)(0);
    const endY = (0, react_1.useRef)(0);
    const _x = (0, react_1.useRef)(null);
    const _y = (0, react_1.useRef)(null);
    const requestRef = (0, react_1.useRef)(0);
    const animateMouse = ()=>{
        if (mouseRef.current === null) return;
        if (_x.current !== null && _y.current !== null) {
            _x.current += (endX.current - _x.current) / delay;
            _y.current += (endY.current - _y.current) / delay;
            mouseRef.current.style.opacity = `${opacity}`;
            mouseRef.current.style.transform = `translate(-50%, -50%) translate3d(${_x.current}px, ${_y.current}px, 0)`;
        }
        requestRef.current = requestAnimationFrame(animateMouse);
    };
    const handleMouseMove = (e)=>{
        if (mouseRef.current === null) return;
        endX.current = e.clientX;
        endY.current = e.clientY;
        if (_x.current === null || _y.current === null) {
            _x.current = endX.current;
            _y.current = endY.current;
            mouseRef.current.style.opacity = `${opacity}`;
            mouseRef.current.style.transform = `translate(-50%, -50%) translate3d(${_x.current}px, ${_y.current}px, 0)`;
        }
        if (!(e.target instanceof HTMLElement)) return;
        let cursorStyle = 'default';
        let currentElement = e.target;
        while(currentElement){
            const _cursorStyle = currentElement.style.cursor;
            if (_cursorStyle) {
                cursorStyle = _cursorStyle;
                break;
            }
            currentElement = currentElement.parentElement;
        }
        dispatch({
            type: 'UPDATE_STYLE',
            payload: cursorStyle
        });
    };
    (0, react_1.useEffect)(()=>{
        if (!mouseRef.current) return;
        animateMouse();
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [
        delay,
        opacity
    ]);
    return mouseRef;
};
exports.default = useMouseMoveEffect;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/useMouseStateEffect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const __1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)");
const useMouseStateEffect = ()=>{
    const dispatch = (0, __1.useCursorifyDispatch)();
    const handleMouseDown = ()=>{
        dispatch({
            type: 'UPDATE_MOUSE_STATE',
            payload: 'mouseDown'
        });
    };
    const handleMouseUp = ()=>{
        dispatch({
            type: 'UPDATE_MOUSE_STATE',
            payload: 'default'
        });
    };
    (0, react_1.useEffect)(()=>{
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return ()=>{
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    return;
};
exports.default = useMouseStateEffect;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/Cursorify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const jsx_runtime_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const useDefaultCursorVisibleEffect_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/useDefaultCursorVisibleEffect.js [app-client] (ecmascript)"));
const useMouseMoveEffect_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/useMouseMoveEffect.js [app-client] (ecmascript)"));
const useMouseStateEffect_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/useMouseStateEffect.js [app-client] (ecmascript)"));
const Cursorify = ({ children })=>{
    const ref = (0, react_1.useRef)(null);
    (0, useMouseMoveEffect_1.default)(ref);
    (0, useDefaultCursorVisibleEffect_1.default)();
    (0, useMouseStateEffect_1.default)();
    return (0, jsx_runtime_1.jsx)("div", {
        ref: ref,
        style: {
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            zIndex: 9999
        },
        children: children
    });
};
exports.default = Cursorify;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var Cursorify_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/Cursorify.js [app-client] (ecmascript)");
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return __importDefault(Cursorify_1).default;
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/hooks/useBreakpoint.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const useBreakpoint = (breakpoint)=>{
    const [enabled, setEnabled] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(()=>{
        const handleResize = ()=>{
            if (window.innerWidth < breakpoint) {
                setEnabled(false);
            } else {
                setEnabled(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    }, [
        breakpoint
    ]);
    return enabled;
};
exports.default = useBreakpoint;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/hooks/useCursorifyReducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const reducer = (state, action)=>{
    switch(action.type){
        case 'UPDATE_STYLE':
            return {
                ...state,
                cursorStyle: action.payload
            };
        case 'UPDATE_MOUSE_STATE':
            return {
                ...state,
                mouseState: action.payload
            };
        case 'UPDATE_CURSOR':
            return {
                ...state,
                cursor: action.payload
            };
        case 'UPDATE_DELAY':
            return {
                ...state,
                delay: action.payload
            };
        case 'UPDATE_OPACITY':
            return {
                ...state,
                opacity: action.payload
            };
        case 'UPDATE_VISIBLE_DEFAULT_CURSOR':
            return {
                ...state,
                defaultCursorVisible: action.payload
            };
        case 'UPDATE_ENABLED':
            return {
                ...state,
                enabled: action.payload
            };
        default:
            return state;
    }
};
const useCursorifyReducer = (defaultState)=>{
    return (0, react_1.useReducer)(reducer, defaultState);
};
exports.default = useCursorifyReducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/CursorifyProvider.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CursorifyProvider = void 0;
exports.useCursorifyState = useCursorifyState;
exports.useCursorifyDispatch = useCursorifyDispatch;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const DefaultCursor_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/DefaultCursor/index.js [app-client] (ecmascript)");
const Cursorify_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/Cursorify/index.js [app-client] (ecmascript)"));
const useBreakpoint_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/hooks/useBreakpoint.js [app-client] (ecmascript)"));
const useCursorifyReducer_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/hooks/useCursorifyReducer.js [app-client] (ecmascript)"));
const defaultCursorifyState = {
    cursor: (0, jsx_runtime_1.jsx)(DefaultCursor_1.DefaultCursor, {}),
    delay: 1,
    opacity: 1,
    defaultCursorVisible: false,
    breakpoint: 0,
    cursorStyle: 'default',
    mouseState: 'default'
};
const CursorifyStateContext = (0, react_1.createContext)(defaultCursorifyState);
const CursorifyDispatchContext = (0, react_1.createContext)(null);
const CursorifyProvider = ({ children, enabled, ...props })=>{
    const [state, dispatch] = (0, useCursorifyReducer_1.default)({
        ...defaultCursorifyState,
        ...props
    });
    const breakpointEnabled = (0, useBreakpoint_1.default)(state.breakpoint);
    return (0, jsx_runtime_1.jsx)(CursorifyStateContext.Provider, {
        value: state,
        children: (0, jsx_runtime_1.jsxs)(CursorifyDispatchContext.Provider, {
            value: dispatch,
            children: [
                enabled && breakpointEnabled && (0, jsx_runtime_1.jsx)(Cursorify_1.default, {
                    children: state.cursor
                }),
                children
            ]
        })
    });
};
exports.CursorifyProvider = CursorifyProvider;
function useCursorifyState() {
    const context = (0, react_1.useContext)(CursorifyStateContext);
    if (!context) {
        throw new Error('Cannot find Cursorify Provider. You need to use Cursorify Provider within its parent component.');
    }
    return context;
}
function useCursorifyDispatch() {
    const context = (0, react_1.useContext)(CursorifyDispatchContext);
    if (!context) {
        throw new Error('Cannot find Cursorify Provider. You need to use Cursorify Provider within its parent component.');
    }
    return context;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/CursorifyProvider.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/DefaultCursor/index.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/useUpdateCursorify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useUpdateCursorify = void 0;
const CursorifyProvider_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/CursorifyProvider/index.js [app-client] (ecmascript)");
const useUpdateCursorify = ()=>{
    const dispatch = (0, CursorifyProvider_1.useCursorifyDispatch)();
    const updateCursor = (cursor)=>{
        dispatch({
            type: 'UPDATE_CURSOR',
            payload: cursor
        });
    };
    const updateDelay = (delay)=>{
        dispatch({
            type: 'UPDATE_DELAY',
            payload: delay
        });
    };
    const updateOpacity = (opacity)=>{
        dispatch({
            type: 'UPDATE_OPACITY',
            payload: opacity
        });
    };
    const updateDefaultCursorVisible = (defaultCursorVisible)=>{
        dispatch({
            type: 'UPDATE_VISIBLE_DEFAULT_CURSOR',
            payload: defaultCursorVisible
        });
    };
    const updateEnabled = (enabled)=>{
        dispatch({
            type: 'UPDATE_ENABLED',
            payload: enabled
        });
    };
    return {
        updateCursor,
        updateDelay,
        updateOpacity,
        updateDefaultCursorVisible,
        updateEnabled
    };
};
exports.useUpdateCursorify = useUpdateCursorify;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/useUpdateCursorify.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/useCursorify.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/components/index.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/hooks/index.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/types/index.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/EmojiCursor/EmojiCursor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmojiCursor = void 0;
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/index.js [app-client] (ecmascript)");
const react_2 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const EmojiCursor = ({ disabled })=>{
    const { mouseState, style } = (0, react_1.useCursorify)();
    return react_2.default.createElement("div", {
        "data-hover": style,
        style: {
            width: 40,
            height: 40,
            fontSize: 30
        }
    }, (()=>{
        if (disabled) return '🖐️';
        if (mouseState === 'mouseDown') return '✊';
        if (style === 'pointer') return '👆';
        return '🖐️';
    })());
};
exports.EmojiCursor = EmojiCursor;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/EmojiCursor/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/EmojiCursor/EmojiCursor.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/svgs/Default.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function Default() {
    return react_1.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        fill: "none",
        viewBox: "0 0 32 32"
    }, react_1.default.createElement("g", {
        filter: "url(#filter0_d_182_6967)"
    }, react_1.default.createElement("mask", {
        id: "path-1-outside-1_182_6967",
        width: "14",
        height: "22",
        x: "1.2",
        y: "2",
        fill: "#000",
        maskUnits: "userSpaceOnUse"
    }, react_1.default.createElement("path", {
        fill: "#fff",
        d: "M1.2 2H15.2V24H1.2z"
    }), react_1.default.createElement("path", {
        d: "M14.2 14.878L3 3v16.244l4-.508L10.4 23l.898-.409L11 17.213l3.2-2.335z"
    })), react_1.default.createElement("path", {
        fill: "#1F1F1F",
        d: "M14.2 14.878L3 3v16.244l4-.508L10.4 23l.898-.409L11 17.213l3.2-2.335z"
    }), react_1.default.createElement("path", {
        stroke: "#fff",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M14.2 14.878L3 3v16.244l4-.508L10.4 23l.898-.409L11 17.213l3.2-2.335z",
        mask: "url(#path-1-outside-1_182_6967)"
    })), react_1.default.createElement("defs", null, react_1.default.createElement("filter", {
        id: "filter0_d_182_6967",
        width: "36",
        height: "36",
        x: "-2",
        y: "-2",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse"
    }, react_1.default.createElement("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
    }), react_1.default.createElement("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    }), react_1.default.createElement("feOffset", null), react_1.default.createElement("feGaussianBlur", {
        stdDeviation: "1"
    }), react_1.default.createElement("feColorMatrix", {
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
    }), react_1.default.createElement("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_182_6967"
    }), react_1.default.createElement("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_182_6967",
        result: "shape"
    }))));
}
exports.default = Default;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/svgs/Pointer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function Pointer() {
    return react_1.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        fill: "none",
        viewBox: "0 0 32 32"
    }, react_1.default.createElement("g", {
        filter: "url(#filter0_d_182_7013)"
    }, react_1.default.createElement("mask", {
        id: "path-1-outside-1_182_7013",
        width: "20",
        height: "21",
        x: "5",
        y: "6",
        fill: "#000",
        maskUnits: "userSpaceOnUse"
    }, react_1.default.createElement("path", {
        fill: "#fff",
        d: "M5 6H25V27H5z"
    }), react_1.default.createElement("path", {
        fillRule: "evenodd",
        d: "M12 9c0-.5 0-2 1.5-2S15 8.5 15 9v5.461c0-.534.037-1.961 1.5-1.961 1.5 0 1.5 1.5 1.5 2V16v-1c0-.5 0-2 1.5-2s1.5 1.5 1.5 2v.95c.002-.544.048-1.95 1.5-1.95 1.5 0 1.5 1.5 1.5 2l-.5 6c-.5 4-4.5 4-4.5 4h-4v-7 7c-1 0-4.5 0-5.5-4S6 17.5 6 17.5 6 16 8 16c1.988 0 3.976 2.964 4 3V9z",
        clipRule: "evenodd"
    })), react_1.default.createElement("path", {
        fill: "#1F1F1F",
        fillRule: "evenodd",
        d: "M12 9c0-.5 0-2 1.5-2S15 8.5 15 9v5.461c0-.534.037-1.961 1.5-1.961 1.5 0 1.5 1.5 1.5 2V16v-1c0-.5 0-2 1.5-2s1.5 1.5 1.5 2v.95c.002-.544.048-1.95 1.5-1.95 1.5 0 1.5 1.5 1.5 2l-.5 6c-.5 4-4.5 4-4.5 4h-4v-7 7c-1 0-4.5 0-5.5-4S6 17.5 6 17.5 6 16 8 16c1.988 0 3.976 2.964 4 3V9z",
        clipRule: "evenodd"
    }), react_1.default.createElement("path", {
        fill: "#fff",
        d: "M12 9h-1 1zm3 5.461h-1a1 1 0 002 .002l-1-.002zM18 16h-1a1 1 0 001 1v-1zm0 0v1a1 1 0 001-1h-1zm3-1h1-1zm0 .95h-1a1 1 0 002 .002l-1-.003zm3 .05v1a1 1 0 001-1h-1zm0 0v-1a1 1 0 00-.997.917L24 16zm-.5 6l.992.124a.933.933 0 00.005-.041L23.5 22zM15 26h-1a1 1 0 001 1v-1zm0-7h1a1 1 0 00-1-1v1zm0 0v-1a1 1 0 00-1 1h1zm0 7v1a1 1 0 001-1h-1zm-9-8.5H5a1 1 0 00.804.98L6 17.5zm6 1.5l-.832.555A1 1 0 0013 19h-1zm0-3v-1a1 1 0 00-1 1h1zm0 0v1a1 1 0 001-1h-1zm1.5-10c-.55 0-1.039.14-1.443.424-.397.28-.64.65-.789.995C10.99 8.069 11 8.767 11 9h2c0-.267.01-.57.107-.794.04-.092.077-.129.101-.146.018-.013.091-.06.292-.06V6zM16 9c0-.233.01-.93-.268-1.581a2.309 2.309 0 00-.79-.995C14.54 6.14 14.05 6 13.5 6v2c.2 0 .274.047.292.06.024.017.062.054.101.146.096.224.107.527.107.794h2zm0 5.461V9h-2v5.461h2zm.5-2.961c-.535 0-1.014.133-1.413.404a2.29 2.29 0 00-.796.963c-.29.64-.29 1.328-.291 1.592l2 .004c0-.27.018-.563.113-.77a.304.304 0 01.098-.135c.019-.013.093-.058.289-.058v-2zm2.5 3c0-.233.01-.93-.268-1.581a2.31 2.31 0 00-.79-.995c-.403-.284-.893-.424-1.442-.424v2c.2 0 .273.047.292.06.024.017.062.054.101.146.096.224.107.527.107.794h2zm0 1.5v-1.5h-2V16h2zm-1-1v2-2zm-1 0v1h2v-1h-2zm2.5-3c-.55 0-1.039.14-1.443.424a2.31 2.31 0 00-.789.995C16.99 14.069 17 14.767 17 15h2c0-.267.01-.57.107-.794.04-.092.077-.129.101-.146.019-.013.091-.06.292-.06v-2zm2.5 3c0-.233.01-.93-.268-1.581a2.31 2.31 0 00-.79-.995C20.54 12.14 20.05 12 19.5 12v2c.2 0 .274.047.292.06.024.017.062.054.101.146.096.224.107.527.107.794h2zm0 .95V15h-2v.95h2zm0 .002c0-.27.02-.56.114-.763a.298.298 0 01.097-.131c.02-.013.094-.058.289-.058v-2c-.53 0-1.007.131-1.405.398a2.285 2.285 0 00-.797.954c-.293.636-.297 1.322-.298 1.594l2 .006zm.5-.952c.2 0 .274.047.292.06.024.017.062.054.101.146.096.224.107.527.107.794h2c0-.233.01-.93-.268-1.581a2.31 2.31 0 00-.79-.995C23.54 13.14 23.05 13 22.5 13v2zm1.5 0v2-2zm.497 7.083l.5-6-1.994-.166-.5 6 1.994.166zM19 26l.001 1H19.028a2.619 2.619 0 00.216-.01 6.452 6.452 0 002.245-.585c1.312-.618 2.703-1.88 3.003-4.281l-1.984-.248c-.2 1.599-1.059 2.337-1.871 2.72a4.462 4.462 0 01-1.642.404h.004L19 26zm-4 1h4v-2h-4v2zm-1-8v7h2v-7h-2zm1 1v-2 2zm1 6v-7h-2v7h2zm-7.47-3.758c.579 2.316 1.924 3.554 3.314 4.172C13.178 27.007 14.49 27 15 27v-2c-.491 0-1.428-.007-2.344-.414-.86-.382-1.765-1.144-2.186-2.828l-1.94.485zM6 17.5l-.197.98H5.8 5.8l-.005-.001-.006-.002h-.002l.031.009c.036.01.101.033.188.07.174.077.435.217.73.462.577.482 1.343 1.418 1.795 3.224l1.94-.485c-.548-2.193-1.532-3.507-2.455-4.275a5.077 5.077 0 00-1.208-.758 3.78 3.78 0 00-.536-.188 1.983 1.983 0 00-.045-.01l-.017-.004-.007-.001-.003-.001h-.001c-.001 0-.002 0-.198.98zM8 15c-1.291 0-2.124.508-2.582 1.195A2.533 2.533 0 005 17.475v.024l1 .001 1 .001v.004a.573.573 0 010 .023v.002a.534.534 0 01.083-.226c.04-.062.208-.304.917-.304v-2zm4.831 3.444a12.06 12.06 0 00-1.389-1.666 7.81 7.81 0 00-1.47-1.173C9.419 15.274 8.743 15 8 15v2c.252 0 .57.097.948.322.372.223.743.535 1.083.873.68.678 1.14 1.365 1.137 1.36l1.663-1.111zM11 16v3h2v-3h-2zm1-1v2-2zm-1-6v7h2V9h-2z",
        mask: "url(#path-1-outside-1_182_7013)"
    })), react_1.default.createElement("defs", null, react_1.default.createElement("filter", {
        id: "filter0_d_182_7013",
        width: "36",
        height: "36",
        x: "-2",
        y: "-2",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse"
    }, react_1.default.createElement("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
    }), react_1.default.createElement("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    }), react_1.default.createElement("feOffset", null), react_1.default.createElement("feGaussianBlur", {
        stdDeviation: "1"
    }), react_1.default.createElement("feColorMatrix", {
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
    }), react_1.default.createElement("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_182_7013"
    }), react_1.default.createElement("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_182_7013",
        result: "shape"
    }))));
}
exports.default = Pointer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/svgs/Text.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function Text() {
    return react_1.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        fill: "none",
        viewBox: "0 0 32 32"
    }, react_1.default.createElement("g", {
        filter: "url(#filter0_d_182_7059)"
    }, react_1.default.createElement("mask", {
        id: "path-1-outside-1_182_7059",
        width: "9",
        height: "22",
        x: "11",
        y: "5",
        fill: "#000",
        maskUnits: "userSpaceOnUse"
    }, react_1.default.createElement("path", {
        fill: "#fff",
        d: "M11 5H20V27H11z"
    }), react_1.default.createElement("path", {
        d: "M19 7V6h-2.5s-1 0-1 .75c0-.75-1-.75-1-.75H12v1h2s1 0 1 1v16c0 1-1 1-1 1h-2v1h2.5s1 0 1-.75c0 .75 1 .75 1 .75H19v-1h-2s-1 0-1-1V8c0-1 1-1 1-1h2z"
    })), react_1.default.createElement("path", {
        fill: "#1F1F1F",
        d: "M19 7V6h-2.5s-1 0-1 .75c0-.75-1-.75-1-.75H12v1h2s1 0 1 1v16c0 1-1 1-1 1h-2v1h2.5s1 0 1-.75c0 .75 1 .75 1 .75H19v-1h-2s-1 0-1-1V8c0-1 1-1 1-1h2z"
    }), react_1.default.createElement("path", {
        stroke: "#fff",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M19 7V6h-2.5s-1 0-1 .75c0-.75-1-.75-1-.75H12v1h2s1 0 1 1v16c0 1-1 1-1 1h-2v1h2.5s1 0 1-.75c0 .75 1 .75 1 .75H19v-1h-2s-1 0-1-1V8c0-1 1-1 1-1h2z",
        mask: "url(#path-1-outside-1_182_7059)"
    })), react_1.default.createElement("defs", null, react_1.default.createElement("filter", {
        id: "filter0_d_182_7059",
        width: "36",
        height: "36",
        x: "-2",
        y: "-2",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse"
    }, react_1.default.createElement("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
    }), react_1.default.createElement("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    }), react_1.default.createElement("feOffset", null), react_1.default.createElement("feGaussianBlur", {
        stdDeviation: "1"
    }), react_1.default.createElement("feColorMatrix", {
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
    }), react_1.default.createElement("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_182_7059"
    }), react_1.default.createElement("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_182_7059",
        result: "shape"
    }))));
}
exports.default = Text;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/PhingerCursor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PhingerCursor = void 0;
const react_1 = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/react/dist/index.js [app-client] (ecmascript)");
const react_2 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const Default_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/svgs/Default.js [app-client] (ecmascript)"));
const Pointer_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/svgs/Pointer.js [app-client] (ecmascript)"));
const Text_1 = __importDefault(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/svgs/Text.js [app-client] (ecmascript)"));
const PhingerCursor = ({ disabled })=>{
    const { style } = (0, react_1.useCursorify)();
    const margin = disabled ? 24 : style === 'default' ? 24 : 12;
    return react_2.default.createElement("div", {
        style: {
            width: 24,
            height: 24,
            marginTop: margin,
            marginLeft: margin
        }
    }, (()=>{
        if (disabled) return react_2.default.createElement(Default_1.default, null);
        if (style === 'pointer') return react_2.default.createElement(Pointer_1.default, null);
        if (style === 'text') return react_2.default.createElement(Text_1.default, null);
        return react_2.default.createElement(Default_1.default, null);
    })());
};
exports.PhingerCursor = PhingerCursor;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// https://github.com/phisch/phinger-cursors
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/PhingerCursor.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/EmojiCursor/index.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/@cursorify/cursors/dist/PhingerCursor/index.js [app-client] (ecmascript)"), exports);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Projects_modelolanding1_36f68fa1._.js.map