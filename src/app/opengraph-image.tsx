// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og"
import { opengraphStyles } from "./opengraph-styles"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div style={opengraphStyles.container}>
                <div style={opengraphStyles.scannerLine} />

                {/* Updated TE mark */}
                <div style={opengraphStyles.logoContainer}>
                    <svg width="80" height="80" viewBox="0 0 28 28" fill="none">
                        {/* T */}
                        <rect x="2" y="4" width="9" height="2.5" rx="0.5" fill="#1A1A1A" />
                        <rect x="5" y="4" width="3" height="20" rx="0.5" fill="#1A1A1A" />
                        {/* E */}
                        <rect x="15" y="4" width="3" height="20" rx="0.5" fill="#1A1A1A" />
                        <rect x="15" y="4" width="8" height="2.5" rx="0.5" fill="#1A1A1A" />
                        <rect x="15" y="12.75" width="6" height="2.5" rx="0.5" fill="#7A1E1E" />
                        <rect x="15" y="21.5" width="8" height="2.5" rx="0.5" fill="#1A1A1A" />
                    </svg>
                </div>

                <div style={opengraphStyles.textContainer}>
                    <div style={opengraphStyles.title}>Timothy Evan</div>
                    <div style={opengraphStyles.subtitle}>Frontend Developer / Data Analyst</div>
                </div>

                <div style={opengraphStyles.stampContainer}>
                    <div style={opengraphStyles.versionText}>V.2026</div>
                    <div style={opengraphStyles.versionLine} />
                </div>
            </div>
        ),
        { ...size }
    )
}