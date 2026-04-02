module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Projects/modelolanding1/components/cursor-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorProvider",
    ()=>CursorProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CursorProvider({ children }) {
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clicking, setClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Hide on touch devices
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && "ontouchstart" in window) //TURBOPACK unreachable
        ;
        const onMove = (e)=>{
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            if (!visible) setVisible(true);
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };
        const onDown = ()=>setClicking(true);
        const onUp = ()=>setClicking(false);
        const onOver = (e)=>{
            const target = e.target;
            if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
                setHovering(true);
            }
        };
        const onOut = (e)=>{
            const target = e.target;
            if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
                setHovering(false);
            }
        };
        const onLeave = ()=>setVisible(false);
        const onEnter = ()=>setVisible(true);
        // Ring follow with delay=10 (very smooth/slow follow)
        let raf;
        const animate = ()=>{
            const speed = 0.08 // delay 10 = very slow follow
            ;
            ring.current.x += (mouse.current.x - ring.current.x) * speed;
            ring.current.y += (mouse.current.y - ring.current.y) * speed;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
            }
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("mouseup", onUp);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mouseenter", onEnter);
        return ()=>{
            cancelAnimationFrame(raf);
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseup", onUp);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
        };
    }, [
        visible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: hovering ? 18 : clicking ? 8 : 10,
                    height: hovering ? 18 : clicking ? 8 : 10,
                    backgroundColor: "#D4A843",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 99999,
                    opacity: visible ? 1 : 0,
                    marginLeft: hovering ? -9 : clicking ? -4 : -5,
                    marginTop: hovering ? -9 : clicking ? -4 : -5,
                    transition: "width 0.2s, height 0.2s, margin 0.2s, opacity 0.3s",
                    mixBlendMode: "difference"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/cursor-provider.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: hovering ? 50 : clicking ? 30 : 40,
                    height: hovering ? 50 : clicking ? 30 : 40,
                    border: `1.5px solid ${hovering ? "rgba(212,168,67,0.8)" : "rgba(212,168,67,0.4)"}`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 99998,
                    opacity: visible ? 1 : 0,
                    marginLeft: hovering ? -25 : clicking ? -15 : -20,
                    marginTop: hovering ? -25 : clicking ? -15 : -20,
                    transition: "width 0.25s, height 0.25s, margin 0.25s, border-color 0.25s, opacity 0.3s"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/cursor-provider.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 769px) {
          * { cursor: none !important; }
        }
        @media (max-width: 768px) {
          .phinger-dot, .phinger-ring { display: none !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/cursor-provider.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
}),
"[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e7f2685._.js.map