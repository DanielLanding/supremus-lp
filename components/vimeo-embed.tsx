"use client"

import { useRef, useState } from "react"

export function VimeoEmbed({ videoUrl, title }: { videoUrl: string; title: string }) {
  const [active, setActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-transparent mb-[-2px]"
      style={{ padding: "56.25% 0 0 0", position: "relative" }}
    >
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: active ? "auto" : "none",
        }}
        title={title}
      />
      {!active && (
        <div
          onClick={() => setActive(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            cursor: "pointer",
          }}
        />
      )}
      {active && (
        <div
          onMouseLeave={() => setActive(false)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}
    </div>
  )
}
