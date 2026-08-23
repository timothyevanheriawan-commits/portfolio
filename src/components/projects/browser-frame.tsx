// src/components/projects/browser-frame.tsx
import Image from "next/image";

interface BrowserFrameProps {
  /** Path to a CONTENT-ONLY screenshot — no OS chrome, no real browser tabs baked in. */
  src: string;
  alt: string;
  /** Text shown in the fake address bar, e.g. "steam-games-analysis.streamlit.app" */
  url: string;
  priority?: boolean;
}

/**
 * Minimal fake browser chrome (AuraFlow / Vertex style) wrapping a bounded-height
 * viewport onto the screenshot. Tall pages are cropped to the top by default and
 * slowly pan down to reveal the rest of the page on hover — keeps every preview
 * the same size on the page regardless of how tall the source screenshot is,
 * while still letting people see more of the site without leaving the page.
 *
 * Pass in a plain, unframed screenshot. This component draws the ONLY frame —
 * never pass in an image that already has a browser chrome composited into it,
 * or you'll get a double header.
 */
export function BrowserFrame({ src, alt, url, priority }: BrowserFrameProps) {
  return (
    <div className="group/frame border border-[#E8E7E4] overflow-hidden">
      {/* Fake chrome bar */}
      <div className="flex items-center h-9 bg-[#1A1A1A] px-4 relative">
        {/* Traffic lights */}
        <div className="flex items-center gap-[6px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#7A1E1E]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#4A4A4A]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#4A4A4A]" />
        </div>

        {/* Centered URL pill */}
        <div className="absolute left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-[#2A2A2A] max-w-[70%]">
          <span className="text-[10px] font-mono text-[#9F9F9F] tracking-wide truncate block">
            <span className="text-[#7A1E1E]">https://</span>
            {url}
          </span>
        </div>
      </div>

      {/* Bounded viewport — same height on every card, no matter the source image's height */}
      <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden bg-[#F7F7F5]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          priority={priority}
          className="object-cover object-top transition-[object-position] duration-[4500ms] ease-in-out group-hover/frame:object-bottom motion-reduce:transition-none"
        />

        {/* Bottom fade — signals there's more page below, fades out on hover as the pan reveals it */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1A1A1A]/15 to-transparent opacity-100 group-hover/frame:opacity-0 transition-opacity duration-500" />
      </div>
    </div>
  );
}
