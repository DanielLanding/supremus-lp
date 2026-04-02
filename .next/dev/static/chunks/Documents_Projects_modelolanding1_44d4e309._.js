(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarqueeCarousel",
    ()=>MarqueeCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PESSOAS = Array.from({
    length: 11
}, (_, i)=>`/pessoa${i}`);
const DOUBLED = [
    ...PESSOAS,
    ...PESSOAS
];
function MarqueeCarousel() {
    _s();
    const [blurAmount, setBlurAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarqueeCarousel.useEffect": ()=>{
            let ticking = false;
            const handleScroll = {
                "MarqueeCarousel.useEffect.handleScroll": ()=>{
                    if (!ticking) {
                        window.requestAnimationFrame({
                            "MarqueeCarousel.useEffect.handleScroll": ()=>{
                                if (carouselRef.current) {
                                    const rect = carouselRef.current.getBoundingClientRect();
                                    const viewHeight = window.innerHeight;
                                    // O foco total ocorre quando o carrossel sobe até uns 60% da tela (mais visível)
                                    const startBlurAt = viewHeight * 1.1;
                                    const fullyClearAt = viewHeight * 0.65;
                                    let currentBlur = 0;
                                    if (rect.top > startBlurAt) {
                                        currentBlur = 15;
                                    } else if (rect.top < fullyClearAt) {
                                        currentBlur = 0;
                                    } else {
                                        const range = startBlurAt - fullyClearAt;
                                        const progress = (rect.top - fullyClearAt) / range;
                                        currentBlur = progress * 15;
                                    }
                                    setBlurAmount(currentBlur);
                                }
                                ticking = false;
                            }
                        }["MarqueeCarousel.useEffect.handleScroll"]);
                        ticking = true;
                    }
                }
            }["MarqueeCarousel.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "MarqueeCarousel.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["MarqueeCarousel.useEffect"];
        }
    }["MarqueeCarousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "carousel-wrapper w-full overflow-hidden relative",
        style: {
            background: "#f5f5f7",
            zIndex: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 pointer-events-none -z-10",
                style: {
                    height: "calc(100% - 3rem)",
                    backgroundColor: "var(--navy-dark)"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 pointer-events-none -z-10",
                style: {
                    height: "3rem",
                    background: "linear-gradient(to bottom, var(--navy-dark) 0%, #f5f5f7 100%)",
                    backdropFilter: "blur(8px)"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "marquee-track relative z-10",
                style: {
                    filter: `blur(${blurAmount}px)`
                },
                children: DOUBLED.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "marquee-card shrink-0 shadow-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: `Participante ${i + 1}`,
                            className: "w-full h-full object-cover object-top"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(MarqueeCarousel, "G+LhgEjO+6QsJnx2Hgl4Wm0lL6U=");
_c = MarqueeCarousel;
var _c;
__turbopack_context__.k.register(_c, "MarqueeCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WistiaVideo",
    ()=>WistiaVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/script.js [app-client] (ecmascript)");
"use client";
;
;
function WistiaVideo({ videoId, className = "rounded-2xl", aspectRatio = "2.39 / 1" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: `https://fast.wistia.com/embed/medias/${videoId}.jsonp`,
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://fast.wistia.com/assets/external/E-v1.js",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full relative overflow-hidden ${className}`,
                style: {
                    aspectRatio,
                    backgroundColor: "transparent"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `wistia_embed wistia_async_${videoId} videoFoam=true`,
                        style: {
                            height: "100%",
                            width: "100%",
                            position: "relative",
                            backgroundColor: "transparent"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = WistiaVideo;
var _c;
__turbopack_context__.k.register(_c, "WistiaVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const NAV_LINKS = [
    [
        "#hero",
        "Início"
    ],
    [
        "#ingressos",
        "Ingressos"
    ],
    [
        "#sobre",
        "Sobre o Evento"
    ],
    [
        "#edicao",
        "Edição 2026"
    ],
    [
        "#depoimentos",
        "Depoimentos"
    ],
    [
        "#experiencia",
        "Experiência Alto Padrão"
    ]
];
function MobileNav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            document.body.style.overflow = open ? "hidden" : "";
            return ({
                "MobileNav.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["MobileNav.useEffect"];
        }
    }["MobileNav.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "lg:hidden flex flex-col justify-center gap-1.5 p-2 shrink-0",
                onClick: ()=>setOpen(true),
                "aria-label": "Abrir menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block w-6 h-0.5 bg-white rounded-full transition-all"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block w-6 h-0.5 bg-white rounded-full transition-all"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block w-4 h-0.5 bg-white rounded-full transition-all"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
                onClick: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 z-50 h-full w-72 flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`,
                style: {
                    background: "rgba(10,22,40,0.98)",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(24px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-5",
                        style: {
                            borderBottom: "1px solid rgba(255,255,255,0.08)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-black text-lg italic",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#D4A843"
                                        },
                                        children: "GIGANTES"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "2026"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen(false),
                                className: "text-white/50 hover:text-white p-1 transition-colors",
                                "aria-label": "Fechar menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    fill: "none",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 4l12 12M16 4L4 16",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col px-6 py-8 gap-1",
                        children: NAV_LINKS.map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: "text-white/60 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors py-3 border-b border-white/5",
                                onClick: ()=>setOpen(false),
                                children: label
                            }, href, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 mt-auto mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#ingressos",
                            className: "block text-center text-sm font-black px-6 py-4 rounded-lg transition-all hover:opacity-90",
                            style: {
                                backgroundColor: "#D4A843",
                                color: "#0a0a0a"
                            },
                            onClick: ()=>setOpen(false),
                            children: "Resgatar 50% de desconto"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MobileNav, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Projects/modelolanding1/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GigantesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$marquee$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/components/marquee-carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$wistia$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/components/wistia-video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$mobile$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/modelolanding1/components/mobile-nav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TICKETS = [
    {
        name: "LIGHT",
        price: "R$ 997,00",
        lote2: "Lote 2: R$ 1.197,00",
        type: "standard",
        items: [
            "Passaporte dia 1 e 2 do evento",
            "Caneta Corretor Vencedor",
            "Bloco de anotações GIGANTES",
            "Material dos patrocinadores",
            "Água durante todo o evento",
            "Água quente para chá ou chimarrão durante todo o evento",
            "Tote Bag personalizada do evento",
            "Café durante todo o evento",
            "Biscoitos durante todo o evento",
            "Pasta Corretor Vencedor",
            "CADEIRAS atrás do passaporte PREMIUM"
        ]
    },
    {
        name: "PREMIUM",
        price: "R$ 1.997,00",
        lote2: "Lote 2: R$ 2.497,00",
        type: "standard",
        items: [
            "Passaporte dia 1 e 2 do evento",
            "Caneta Corretor Vencedor",
            "Bloco de anotações GIGANTES",
            "Material dos patrocinadores",
            "Água durante todo o evento",
            "Água quente para chá ou chimarrão durante todo o evento",
            "Tote Bag personalizada do evento",
            "Café durante todo o evento",
            "Biscoitos durante todo o evento",
            "Pasta Corretor Vencedor",
            "MESAS EM FRENTE AO PALCO",
            "Participação no grupo exclusivo do Whats do Gigantes 2026",
            "Apostila do evento inclusa"
        ]
    },
    {
        name: "EXPERIÊNCIA\nALTO PADRÃO",
        price: "R$ 7.997,00",
        lote2: "Lote 2: R$ 8.997,00",
        type: "premium",
        items: [
            "Passaporte dia 1 e 2 do evento",
            "Caneta Corretor Vencedor",
            "Bloco de anotações GIGANTES",
            "Material dos patrocinadores",
            "Água durante todo o evento",
            "Água quente para chá ou chimarrão durante todo o evento",
            "Tote Bag personalizada do evento",
            "Café durante todo o evento",
            "Biscoitos durante todo o evento",
            "Pasta Corretor Vencedor",
            "MESAS EM FRENTE AO PALCO",
            "Participação no grupo exclusivo do Whats do Gigantes 2026",
            "Apostila do evento inclusa",
            "Mouse Pad Corretor Vencedor",
            "Squeeze Corretor Vencedor",
            "Livro ATA Corretor Vencedor",
            "Boné Gigantes do Mercado Imobiliário",
            "Acesso ao Lounge Vip com Coffee Break Gourmet os 2 dias do evento",
            "Garçom durante os dois dias do evento",
            "Credenciamento sem fila",
            "Caneca Corretor Vencedor",
            "MAIS o terceiro dia da Experiência Alto Padrão, um dia em alto mar com All Inclusive (bebidas zero álcool) em um dia de imersão na lancha com a mentoria: DOMINANDO SEUS CLIENTES ATRAVÉS DAS 9 PERSONALIDADES."
        ]
    }
];
const TESTIMONIALS = [
    {
        videoId: "vhbwaetg7w",
        name: "Maria de Fátima (Proprietária da Fada Imóveis)",
        quote: '"Nossa imobiliária faturava R$ 8 milhões por ano. Conheci o Altamir no Gigantes 2023, entrei para a mentoria e, naquele mesmo ano, recebemos a meta de R$ 60 milhões e vendemos R$ 69 milhões. Após renovar, em apenas 7 meses, já vendemos R$ 99 milhões. A metodologia dele causou um desenvolvimento estrondoso em mim, como gestora, e em todas as nossas corretoras."'
    },
    {
        videoId: "91hbvw7p7c",
        name: "Amauri Nobre (Corretor de Imóveis e Proprietário da Amauri Assessoria Imobiliária)",
        quote: '"Quando conheceu o Altemir e seus ensinamentos, já atuava como corretor de imóveis e trabalhava como pintor nos finais de semana para complementar a renda. Após aplicar a metodologia fechou 300 negócios MCMV em 12 meses. Hoje é case de sucesso, destaque na sua cidade e região, bateu todos os recordes de vendas incluindo R$ 10 milhões em 30 dias e R$ 1 milhão em comissão em menos de 1 ano."'
    },
    {
        videoId: "tzu9xexwqc",
        name: "Joel Gossmann (Corretor e Proprietário da Joel Imóveis)",
        quote: '"Eu era garçom e vendedor de loja. Decidi empreender e abri minha própria imobiliária no quarto da minha casa. Hoje, em uma cidade de 20 mil habitantes, ganhei pelo terceiro mês consecutivo o prêmio de R$ 1 milhão em comissão no ano e bati R$ 10 milhões em vendas em 30 dias. Saí de um carro velho para ter uma caminhoneta do ano, apartamento na praia e mais de dez terrenos. Devo tudo ao Corretor Vencedor."'
    },
    {
        videoId: "5to2qn2ycj",
        name: "Rafael e Marelise (Sócios proprietários da Imobiliária Lajeado)",
        quote: '"Logo após adquirirmos 100% da sociedade da imobiliária, com a mentoria Supremus reestruturar tudo, formamos uma equipe totalmente nova, com pessoas que nunca tinham trabalhado no ramo imobiliário. O apoio que recebemos foi fundamental para reorganizar o time em tempo recorde e nos trazer agilidade, pois não podemos viver sem faturamento. Em 3 meses aumentamos 130% o nosso faturamento"'
    }
];
function GigantesPage() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GigantesPage.useEffect": ()=>{
            const handleScroll = {
                "GigantesPage.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["GigantesPage.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "GigantesPage.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["GigantesPage.useEffect"];
        }
    }["GigantesPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-white overflow-x-hidden",
        style: {
            fontFamily: "'Montserrat', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `navbar fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-7 md:py-9'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                className: "shrink-0 navbar-logo-text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-extrabold",
                                        style: {
                                            color: "#D4A843"
                                        },
                                        children: "GIGANTES"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-extrabold",
                                        children: "2026"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-10",
                            children: [
                                [
                                    "#hero",
                                    "Início"
                                ],
                                [
                                    "#ingressos",
                                    "Ingressos"
                                ],
                                [
                                    "#sobre",
                                    "Sobre o Evento"
                                ],
                                [
                                    "#edicao",
                                    "Edição 2026"
                                ],
                                [
                                    "#depoimentos",
                                    "Depoimentos"
                                ],
                                [
                                    "#experiencia",
                                    "Experiência Alto Padrão"
                                ]
                            ].map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: href,
                                    className: "navbar-link",
                                    children: label
                                }, href, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$mobile$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNav"], {}, void 0, false, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "hero",
                        className: "hero-bg relative flex flex-col pt-24 pb-4 overflow-hidden",
                        style: {
                            minHeight: "75vh"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center text-center px-6 py-12 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#05070a]/15 backdrop-blur-[10px] backdrop-saturate-[120%] border border-white/10 rounded-2xl flex flex-col items-center relative z-10 mx-auto px-6 py-8 md:px-12 md:py-14 w-[95%] max-w-[950px] shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/logo-gigantes.svg",
                                            alt: "Gigantes do Mercado Imobiliário",
                                            className: "w-64 md:w-80 mb-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-[14px] md:text-[16px] text-white/90 mb-6 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    className: "shrink-0 opacity-80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "3",
                                                            y: "4",
                                                            width: "18",
                                                            height: "18",
                                                            rx: "2",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16 2v4M8 2v4M3 10h18",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tracking-wide",
                                                    children: "Balneário Camboriú | Setembro de 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[20px] md:text-[27px] lg:text-[32px] font-black uppercase leading-[1.4] text-white text-center max-w-[850px] mb-8",
                                            children: [
                                                "O EVENTO QUE ENTREGA",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#f4c264]",
                                                    children: [
                                                        "A MAIOR INTELIGÊNCIA",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                            className: "hidden lg:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 39
                                                        }, this),
                                                        " DE CONVERSÃO DE VENDAS"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                "DO MERCADO IMOBILIÁRIO."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#ingressos",
                                            className: "bg-[#f4c264] hover:bg-[#eab34e] text-black rounded-xl font-bold transition-colors block w-full max-w-[550px] text-center p-[1.4rem] text-[19px] md:text-[21px] tracking-wide",
                                            children: "Resgatar 50% de desconto"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$marquee$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarqueeCarousel"], {}, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "sobre",
                        className: "sobre-section py-20 md:py-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-6xl mx-auto px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "scroll-icon text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "9",
                                                        y: "2",
                                                        width: "6",
                                                        height: "10",
                                                        rx: "3",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 18v4M8 22h8",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-start gap-8 md:gap-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:w-1/2 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sobre-label uppercase mb-4",
                                                        children: "O QUE É O GIGANTES DO MERCADO IMOBILIÁRIO?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "sobre-heading font-black leading-tight",
                                                        children: "O evento que transforma corretores e imobiliárias, nas maiores autoridades de seus mercados dentro e fora do Brasil!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "sobre-lead text-lg mb-5 leading-relaxed font-semibold",
                                                    children: "São dois dias de treinamento com o maior gerador de corretores de sucesso do Brasil, desenhado exclusivamente para corretores, gerentes de equipes de vendas e donos de imobiliária. São dois dias inteiros de TREINAMENTO com técnicas de vendas, fortalecimento emocional para vendas e gestão de clientes, formar equipes de alta performance, e fazer cada corretor da sua imobiliária FECHAR VENDAS TODOS OS MESES."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 sobre-fotos-row",
                                children: [
                                    "/altemiraoLadoPessoas",
                                    "/pessoas.png",
                                    "/pessoa2",
                                    "/pessoas3.png"
                                ].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sobre-foto-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: `Participantes do evento ${i + 1}`,
                                            className: "sobre-foto-img"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "cta-diferenciado pb-[160px] relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-lg md:text-xl text-center md:text-left italic max-w-md leading-relaxed",
                                    children: "Você quer verdadeiramente ser diferenciado ou quer ficar só pensando que é?"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#ingressos",
                                    className: "hero-cta-btn gold-btn-shiny",
                                    style: {
                                        maxWidth: "380px",
                                        padding: "1.1rem 2.5rem"
                                    },
                                    children: "Quero garantir a promoção"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "edicao",
                        className: "edicao-section pt-[190px] md:pt-[230px] overflow-hidden relative flex flex-col justify-between z-20",
                        style: {
                            marginTop: "-130px",
                            minHeight: "calc(100vh + 130px)",
                            maxHeight: "calc(100vh + 130px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 right-0 w-full pointer-events-none z-20",
                                style: {
                                    top: "-1px",
                                    transform: "scaleY(-1)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 1440 150",
                                    preserveAspectRatio: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-full block",
                                    style: {
                                        height: "130px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,40 C600,150 900,0 1440,60 L1440,150 L0,150 Z",
                                        fill: "#f5f5f7"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-0 pointer-events-none -mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/about-1.png",
                                        alt: "Fundo Edição",
                                        className: "w-full h-full object-cover blur-[50px] md:blur-[70px] scale-110 opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#0a1628] mix-blend-color opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-[#0a1628]/85 via-[#0a1628]/60 to-[#122340]/90"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[10%] -right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1400px] w-full mx-auto text-center flex flex-col items-center relative z-10 px-6 mb-6 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-4xl lg:text-[2.8rem] font-black mb-3 leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "Gigantes do Mercado"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "Imobiliário"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gold-shiny",
                                                children: "Edição 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 text-xs md:text-sm uppercase tracking-wider font-semibold max-w-2xl mx-auto",
                                        children: "O EVENTO QUE ENTREGA A MAIOR INTELIGÊNCIA DE CONVERSÃO DE VENDAS DO MERCADO IMOBILIÁRIO."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[1550px] mx-auto px-4 md:px-10 flex flex-1 flex-col justify-end relative z-10 pb-0 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full overflow-hidden bg-transparent mb-[-2px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$wistia$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WistiaVideo"], {
                                        videoId: "hwa2nywg4h",
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "depoimentos",
                        className: "relative py-24 md:py-32 px-6 overflow-hidden bg-[#f5f5f7]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1200px] mx-auto relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-5 text-gray-800",
                                                    children: "LIBERTE SEU POTENCIAL E DOMINE A ARTE DE VENDER."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[1.75rem] md:text-[2.5rem] font-black text-gray-900 leading-[1.15]",
                                                    children: "Os resultados dos nossos mentorados são SURREAIS."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2 md:pt-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-[15px] md:text-base leading-relaxed",
                                                children: [
                                                    "Somado o faturamento total dos nossos alunos podemos chegar facilmente a marca de",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-gray-800",
                                                        children: " +1 de Bilhão"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    " de reais em vendas no mercado imobiliário. Venha conhecer o GIGANTES 2026."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12",
                                    children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$components$2f$wistia$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WistiaVideo"], {
                                                        videoId: t.videoId,
                                                        aspectRatio: "16 / 9",
                                                        className: "rounded-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-gray-900 font-bold text-[15px] md:text-base leading-snug",
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-[13px] mt-2.5 leading-relaxed italic",
                                                            children: t.quote
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, t.name, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "experiencia",
                        className: "experiencia-section flex items-center pt-[140px] pb-20 px-6 relative overflow-hidden z-20",
                        style: {
                            marginTop: "-100px",
                            minHeight: "calc(100vh + 100px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-0 pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/about-1.png",
                                        alt: "Experiência Contexto",
                                        className: "w-full h-full object-cover blur-[80px] md:blur-[40px] scale-125 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#0a1628] mix-blend-color opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0a1628]/70 to-[#122340]/90"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 right-0 w-full pointer-events-none z-10",
                                style: {
                                    top: "-1px",
                                    transform: "scaleY(-1)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 1440 100",
                                    preserveAspectRatio: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-full block",
                                    style: {
                                        height: "auto"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z",
                                        fill: "#f5f5f7"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-5%] -right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[-10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1300px] w-full mx-auto relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row gap-10 md:gap-14 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2 relative min-h-[550px] md:min-h-[700px] w-full flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-[10%] md:top-[20%] left-[8%] md:left-[10%] w-[50%] md:w-[45%] aspect-[3/4] shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/design-1.webp",
                                                        alt: "Mentoria Sala",
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-[50%] md:top-[55%] left-[25%] md:left-[22%] w-[70%] md:w-[65%] aspect-[16/10] shadow-[0_25px_50px_rgba(0,0,0,0.6)] z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/iate",
                                                            alt: "Iate em Alto Mar",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 left-0 z-20",
                                                            style: {
                                                                transform: "translate(-50%, -50%)"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/images/experiencia-boat.webp",
                                                                alt: "Selo Experiência",
                                                                className: "w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2 flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 text-white/60",
                                                    children: "O Aprendizado no mais alto nível"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl md:text-5xl lg:text-[4rem] font-black uppercase mb-8 leading-tight gold-shiny",
                                                    children: [
                                                        "EXPERIÊNCIA",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 30
                                                        }, this),
                                                        "ALTO PADRÃO"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/85 text-lg md:text-[1.1rem] leading-relaxed mb-8",
                                                    children: "A experiência Alto Padrão é uma mentoria de dia inteiro em alto mar, com o Altemir e mais 20 mentorados. Aprofundando o conhecimento sobre ler pessoas em 10 minutos com material impresso (apostila) inclusa. Para que você saia de lá decifrando como corresponder a cada cliente e entrar na mente e no coração deles rapidamente."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-5 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/design-2-1.webp",
                                                            alt: "Altemir Rocha",
                                                            className: "w-16 h-16 rounded-full object-cover shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/70 text-sm md:text-[15px] leading-relaxed",
                                                                children: "Viva esta experiência que ampliará sua visão sobre ser o corretor que tem lista de clientes e investidores verdadeiros fãs seus."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl italic font-bold",
                                                    style: {
                                                        color: "#D4A843",
                                                        fontFamily: "var(--font-dancing), cursive, serif"
                                                    },
                                                    children: "Altemir Rocha"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "golden-marquee",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "golden-marquee-track",
                            children: Array.from({
                                length: 16
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "golden-marquee-item",
                                    children: "GARANTA O SEU PASSAPORTE ✦"
                                }, i, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "ingressos",
                        className: "relative py-24 md:py-32 px-6 overflow-hidden",
                        style: {
                            background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #0a1628 100%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-5%] -left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/8 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[10%] -right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/10 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[50%] left-[40%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#D4A843]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1200px] mx-auto relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl lg:text-[2.8rem] font-black text-white leading-tight mb-4",
                                                children: [
                                                    "Escolha seu passaporte e garanta",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 49
                                                    }, this),
                                                    "sua vaga no GIGANTES 2026"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/40 text-sm md:text-base italic",
                                                children: "Os preços são promocionais e por tempo limitado."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-5 items-start",
                                        children: TICKETS.map((ticket)=>{
                                            const isPremium = ticket.type === "premium";
                                            const isMid = ticket.name === "PREMIUM";
                                            // 3 tiers: light (base), premium (mid-accent), alto padrão (gold)
                                            const cardClass = isPremium ? "border-2 border-[#D4A843]/40 bg-[#050505]/70 backdrop-blur-[20px] backdrop-saturate-[120%]" : isMid ? "border border-[#D4A843]/30 bg-gradient-to-b from-[#111827] to-[#0c1220]" : "border border-white/10 bg-[#0c1625]/80";
                                            const titleClass = isPremium ? "gold-shiny" : isMid ? "text-white" : "text-white";
                                            const btnClass = isPremium ? "bg-[#D4A843] text-[#0a1628] hover:bg-[#e0b44f] shadow-[0_4px_20px_rgba(212,168,67,0.3)]" : isMid ? "border border-white/30 text-white hover:border-white/50 hover:bg-white/5 bg-transparent" : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white bg-transparent";
                                            const dividerClass = isPremium ? "bg-[#D4A843]/20" : isMid ? "bg-white/15" : "bg-white/8";
                                            const checkClass = isPremium ? "text-[#22c55e]" : isMid ? "text-[#22c55e]/80" : "text-[#22c55e]/70";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `rounded-2xl p-7 md:p-8 flex flex-col ${cardClass}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `font-black text-xl md:text-2xl uppercase leading-tight mb-6 whitespace-pre-line text-center ${titleClass}`,
                                                        children: ticket.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `block w-full text-center text-xs font-bold tracking-wider py-2.5 rounded-lg ${isPremium ? "bg-[#D4A843]/20 text-[#D4A843] border border-[#D4A843]/30" : "bg-[#D4A843]/15 text-[#D4A843] border border-[#D4A843]/20"}`,
                                                            children: "50% de desconto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-1 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white/40 text-sm",
                                                                children: "Lote 1: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-black text-2xl md:text-[1.75rem] text-white",
                                                                children: ticket.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/25 text-xs text-center mb-6",
                                                        children: ticket.lote2
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: `block w-full text-center font-bold text-sm tracking-wider py-3.5 rounded-lg mb-7 transition-all duration-300 ${btnClass}`,
                                                        children: "COMPRAR PASSAPORTE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-full h-px mb-6 ${dividerClass}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-3 flex-1",
                                                        children: ticket.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-2.5 text-white/65 text-[13px] leading-relaxed",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `shrink-0 mt-0.5 text-sm ${checkClass}`,
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                        lineNumber: 544,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    item
                                                                ]
                                                            }, item, true, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, ticket.name, true, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative w-full min-h-screen bg-[#f5f5f7] flex flex-col items-center pt-24 pb-20 px-4 md:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[1400px] mx-auto h-[45vh] md:h-[55vh] z-0 overflow-hidden relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/experiencia-dsc.webp",
                                    alt: "Plateia do evento",
                                    className: "w-full h-full object-cover origin-center"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex w-full max-w-[800px] mx-auto justify-center mt-[-15vh] md:mt-[-20vh]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl p-8 md:p-14 text-center w-full shadow-[0_15px_60px_rgba(0,0,0,0.12)] flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-gray-500",
                                            children: "PACOTES PERSONALIZADOS"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-[2.6rem] font-black text-gray-900 mb-6 tracking-tight leading-tight",
                                            children: "Ingressos em Grupo"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-[15px] md:text-base leading-relaxed mb-10 max-w-lg mx-auto font-medium",
                                            children: "Vai reunir um grupo de 5 pessoas ou mais? Chame nosso time no WhatsApp para consultar valores e pacotes personalizados para vocês."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 w-full max-w-[480px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "bg-[#21a44e] hover:bg-[#1b8c42] transition-colors text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-[13px] md:text-[15px] border border-transparent shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 19
                                                        }, this),
                                                        "SOLICITAR PACOTE DE 5 PESSOAS OU MAIS"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "bg-[#21a44e] hover:bg-[#1b8c42] transition-colors text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-[13px] md:text-[15px] border border-transparent shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 19
                                                        }, this),
                                                        "TIRAR DÚVIDAS SOBRE O GIGANTES"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative overflow-hidden bg-[#050505] min-h-[80vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[15%] right-[5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#D4A843]/8 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[20%] right-[30%] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#0693e3]/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[60%] right-[10%] w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-[#D4A843]/6 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 612,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-stretch min-h-[80vh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-[45%] lg:w-[42%] shrink-0 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/altemirDono",
                                                alt: "Altemir Rocha",
                                                className: "w-full h-full object-cover object-top",
                                                style: {
                                                    minHeight: "500px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#050505] to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-[55%] lg:w-[58%] flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-20 relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl lg:text-[2.8rem] font-black mb-10 leading-tight gold-shiny",
                                                children: "Quem será o seu mentor?"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5 text-white/75 text-[15px] md:text-base leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "Seu sucesso começou com a aplicação de tudo que ensina, e que o fez vender mais de",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: "R$ 2 BILHÕES"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 19
                                                            }, this),
                                                            " no mercado imobiliário."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "São mais de ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: "20 mil corretores"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 31
                                                            }, this),
                                                            " do Brasil treinados."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "Já palestrou para mais de ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: "55 mil pessoas"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 45
                                                            }, this),
                                                            " país afora, tornando-se o palestrante mais ovacionado em grandes palcos."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "É considerado pelos seus alunos o maior gerador de corretores e imobiliárias de sucesso no Brasil. Ele transforma corretores e donos de imobiliárias comuns, em profissionais de sucesso e alta performance."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "São mais de 5.000 alunos e diversos cases faturando alto através da sua metodologia, tem em seu portfólio cases que em pouco tempo, fecharam mais de",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: "R$ 149 milhões"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 19
                                                            }, this),
                                                            " em vendas."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: "É também fundador do IBRACIV"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 19
                                                            }, this),
                                                            " – Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores, um Instituto que tem como propósito elevar o nível de conhecimento atrelado a prática, para que outros corretores e donos de imobiliária experimentem uma vida gigante em abundância material e pessoal."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                                lineNumber: 632,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                lineNumber: 614,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ibraciv-section py-16 md:py-24 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/logo-ibraciv.svg",
                                    alt: "IBRACIV",
                                    className: "h-16 md:h-20 mx-auto mb-8"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 668,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm md:text-base leading-relaxed text-center italic",
                                    children: "Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores – Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter sucesso em todas as áreas da sua vida no mercado imobiliário, com o propósito de transformar pessoas, elevar o nível da profissão e levar prosperidade a todos que tem paixão por vencer."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                            lineNumber: 667,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer py-8 px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$modelolanding1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/30 text-sm",
                    children: "©Copyright 2026 | Todos os direitos reservados"
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                    lineNumber: 686,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/modelolanding1/app/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(GigantesPage, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c = GigantesPage;
var _c;
__turbopack_context__.k.register(_c, "GigantesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Projects_modelolanding1_44d4e309._.js.map