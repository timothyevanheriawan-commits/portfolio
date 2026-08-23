"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  src: string;
  alt: string;
  className?: string;
}

interface Size {
  w: number;
  h: number;
}

interface Pos {
  x: number;
  y: number;
}

/**
 * Bounded-height viewport onto a screenshot. The image is scaled to always
 * cover the viewport (no gaps, whatever the source aspect ratio), and the
 * person can click-and-drag (or touch-drag) to pan around and see the rest
 * of the page. No fake browser chrome — just the frame border.
 *
 * Height stays fixed regardless of the source screenshot's size, so every
 * project preview is the same footprint on the page.
 */
export function ProjectPreview({ src, alt, className }: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const initializedRef = useRef(false);
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    dragging: false,
  });

  const [size, setSize] = useState<Size | null>(null);
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const recompute = useCallback(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img || !img.naturalWidth) return;

    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const aspect = img.naturalWidth / img.naturalHeight;

    let w = cw;
    let h = w / aspect;
    if (h < ch) {
      h = ch;
      w = h * aspect;
    }
    setSize({ w, h });

    const minX = Math.min(0, cw - w);
    const minY = Math.min(0, ch - h);

    setPos((prev) => {
      if (!initializedRef.current) {
        initializedRef.current = true;
        // Center horizontally, top-aligned vertically (shows page header first)
        return { x: minX / 2, y: 0 };
      }
      return {
        x: Math.min(0, Math.max(minX, prev.x)),
        y: Math.min(0, Math.max(minY, prev.y)),
      };
    });
  }, []);

  useEffect(() => {
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [recompute]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: pos.x,
      originY: pos.y,
      dragging: true,
    };
    setIsDragging(true);
    setHasDragged(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging || !size || !containerRef.current) return;
    const cw = containerRef.current.clientWidth;
    const ch = containerRef.current.clientHeight;
    const minX = Math.min(0, cw - size.w);
    const minY = Math.min(0, ch - size.h);
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setPos({
      x: Math.min(0, Math.max(minX, dragRef.current.originX + dx)),
      y: Math.min(0, Math.max(minY, dragRef.current.originY + dy)),
    });
  };

  const endDrag = () => {
    dragRef.current.dragging = false;
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none touch-none border border-[#E8E7E4] bg-[#F7F7F5]",
        "h-[280px] sm:h-[340px] md:h-[400px]",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        onLoad={recompute}
        className="absolute max-w-none pointer-events-none"
        style={
          size
            ? {
                width: size.w,
                height: size.h,
                left: pos.x,
                top: pos.y,
                transition: isDragging
                  ? "none"
                  : "left 0.2s ease-out, top 0.2s ease-out",
              }
            : { opacity: 0 }
        }
      />

      {/* Drag hint — fades out permanently after first interaction */}
      {size && !hasDragged && (
        <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A]/80 text-[9px] font-mono text-[#F7F7F5] uppercase tracking-[0.2em]">
          ↔ Drag to explore
        </span>
      )}
    </div>
  );
}
