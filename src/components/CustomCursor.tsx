"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const coreRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const frame = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });
  const beam = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const isHovering = useRef(false);

  useEffect(() => {
    const isTouchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (isTouchOnly) {
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");
    document.body.classList.add("has-custom-cursor");

    const revealCursor = () => {
      coreRef.current?.classList.remove("hidden");
      frameRef.current?.classList.remove("hidden");
      trailRef.current?.classList.remove("hidden");
      beamRef.current?.classList.remove("hidden");
    };

    const move = (e: PointerEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      revealCursor();

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) rotate(45deg)`;
      }
    };

    const animate = () => {
      frame.current.x += (pos.current.x - frame.current.x) * 0.2;
      frame.current.y += (pos.current.y - frame.current.y) * 0.2;
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;
      beam.current.x += (pos.current.x - beam.current.x) * 0.08;
      beam.current.y += (pos.current.y - beam.current.y) * 0.08;

      if (frameRef.current) {
        frameRef.current.style.transform = `translate3d(${frame.current.x}px, ${frame.current.y}px, 0)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0)`;
      }

      if (beamRef.current) {
        beamRef.current.style.transform = `translate3d(${beam.current.x}px, ${beam.current.y}px, 0)`;
      }

      raf.current = window.requestAnimationFrame(animate);
    };

    const syncHoverState = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      const nextHover = Boolean(
        element?.closest("a, button, [role='button'], input, textarea, select, label, summary")
      );

      if (nextHover === isHovering.current) {
        return;
      }

      isHovering.current = nextHover;
      coreRef.current?.classList.toggle("hovering", nextHover);
      frameRef.current?.classList.toggle("hovering", nextHover);
      trailRef.current?.classList.toggle("hovering", nextHover);
      beamRef.current?.classList.toggle("hovering", nextHover);
    };

    const handleMouseOver = (e: MouseEvent) => {
      syncHoverState(e.target);
    };

    const down = () => {
      coreRef.current?.classList.add("clicking");
      frameRef.current?.classList.add("clicking");
      trailRef.current?.classList.add("clicking");
      beamRef.current?.classList.add("clicking");
    };

    const up = () => {
      coreRef.current?.classList.remove("clicking");
      frameRef.current?.classList.remove("clicking");
      trailRef.current?.classList.remove("clicking");
      beamRef.current?.classList.remove("clicking");
    };

    const leave = () => {
      coreRef.current?.classList.add("hidden");
      frameRef.current?.classList.add("hidden");
      trailRef.current?.classList.add("hidden");
      beamRef.current?.classList.add("hidden");
    };

    const enter = () => {
      revealCursor();
      beamRef.current?.classList.remove("hidden");
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);

    raf.current = window.requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
      window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <style>{`
        html.has-custom-cursor,
        html.has-custom-cursor body,
        html.has-custom-cursor body *,
        body.has-custom-cursor,
        body.has-custom-cursor * {
          cursor: none !important;
        }

        html.has-custom-cursor iframe,
        html.has-custom-cursor iframe * {
          cursor: auto !important;
        }

        @media (pointer: coarse) {
          .cur-core,
          .cur-frame,
          .cur-trail,
          .cur-beam {
            display: none !important;
          }
        }

        .cur-core,
        .cur-frame,
        .cur-trail,
        .cur-beam {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999;
          will-change: transform, opacity;
          transform: translate3d(-100px, -100px, 0);
          transition:
            opacity 0.18s ease,
            transform 0.12s linear,
            color 0.18s ease,
            border-color 0.18s ease,
            width 0.18s ease,
            height 0.18s ease,
            margin 0.18s ease;
        }

        .cur-core.hidden,
        .cur-frame.hidden,
        .cur-trail.hidden,
        .cur-beam.hidden {
          opacity: 0;
        }

        .cur-core {
          width: 12px;
          height: 12px;
          margin-left: -6px;
          margin-top: -6px;
          border: 1px solid rgba(238,233,255,.95);
          background:
            linear-gradient(135deg, rgba(255,255,255,.96) 0%, rgba(216,202,250,.92) 100%);
          transform: translate3d(-100px, -100px, 0) rotate(45deg);
          box-shadow:
            0 0 0 1px rgba(126,87,216,.24),
            0 8px 16px rgba(29,19,58,.14);
        }

        .cur-core::before,
        .cur-core::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          background: rgba(244,241,255,.95);
          transform: translate(-50%, -50%);
          border-radius: 999px;
          opacity: 0.92;
        }

        .cur-core::before {
          width: 20px;
          height: 1px;
        }

        .cur-core::after {
          width: 1px;
          height: 20px;
        }

        .cur-frame {
          width: 52px;
          height: 52px;
          margin-left: -26px;
          margin-top: -26px;
          color: rgba(171,140,245,0.82);
        }

        .cur-frame::before,
        .cur-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid rgba(171,140,245,0.42);
          clip-path: polygon(
            0 0, 25% 0, 25% 4%, 4% 4%, 4% 25%, 0 25%,
            0 75%, 4% 75%, 4% 96%, 25% 96%, 25% 100%, 0 100%,
            75% 100%, 75% 96%, 96% 96%, 96% 75%, 100% 75%,
            100% 25%, 96% 25%, 96% 4%, 75% 4%, 75% 0, 100% 0
          );
          border-radius: 2px;
        }

        .cur-frame::after {
          inset: 50% auto auto 50%;
          width: 22px;
          height: 22px;
          margin-left: -11px;
          margin-top: -11px;
          border: none;
          background:
            linear-gradient(rgba(216,202,250,.42), rgba(216,202,250,.42)) center top / 1px 8px no-repeat,
            linear-gradient(rgba(216,202,250,.42), rgba(216,202,250,.42)) center bottom / 1px 8px no-repeat,
            linear-gradient(90deg, rgba(216,202,250,.42), rgba(216,202,250,.42)) left center / 8px 1px no-repeat,
            linear-gradient(90deg, rgba(216,202,250,.42), rgba(216,202,250,.42)) right center / 8px 1px no-repeat;
        }

        .cur-trail {
          width: 150px;
          height: 150px;
          margin-left: -75px;
          margin-top: -75px;
          opacity: 0.72;
        }

        .cur-trail::before,
        .cur-trail::after {
          content: "";
          position: absolute;
          inset: 0;
        }

        .cur-trail::before {
          background:
            linear-gradient(90deg,
              rgba(171,140,245,0) 0%,
              rgba(171,140,245,.22) 28%,
              rgba(216,202,250,.58) 50%,
              rgba(171,140,245,.22) 72%,
              rgba(171,140,245,0) 100%) center / 100% 1px no-repeat,
            linear-gradient(
              rgba(171,140,245,0) 0%,
              rgba(171,140,245,.18) 28%,
              rgba(216,202,250,.54) 50%,
              rgba(171,140,245,.18) 72%,
              rgba(171,140,245,0) 100%) center / 1px 100% no-repeat;
          animation: cur-guides-shift 1.8s ease-in-out infinite;
        }

        .cur-trail::after {
          background:
            linear-gradient(90deg, rgba(171,140,245,.2), rgba(171,140,245,.2)) center 34px / 14px 1px no-repeat,
            linear-gradient(90deg, rgba(171,140,245,.2), rgba(171,140,245,.2)) center calc(100% - 34px) / 14px 1px no-repeat,
            linear-gradient(rgba(171,140,245,.2), rgba(171,140,245,.2)) 34px center / 1px 14px no-repeat,
            linear-gradient(rgba(171,140,245,.2), rgba(171,140,245,.2)) calc(100% - 34px) center / 1px 14px no-repeat;
          opacity: 0.9;
        }

        .cur-beam {
          width: 118px;
          height: 84px;
          margin-left: -82px;
          margin-top: -52px;
          opacity: 0.56;
        }

        .cur-beam::before,
        .cur-beam::after {
          content: "";
          position: absolute;
          background: rgba(216,202,250,0.38);
          transform-origin: top left;
        }

        .cur-beam::before {
          left: 6px;
          top: 18px;
          width: 78px;
          height: 1px;
          background:
            repeating-linear-gradient(
              90deg,
              rgba(216,202,250,.58) 0 7px,
              rgba(216,202,250,0) 7px 14px
            );
          transform: rotate(-28deg);
          animation: cur-beam-draw 1.3s ease-in-out infinite;
        }

        .cur-beam::after {
          right: 10px;
          bottom: 18px;
          width: 44px;
          height: 18px;
          background:
            linear-gradient(90deg, rgba(216,202,250,.48), rgba(216,202,250,.48)) right center / 32px 1px no-repeat,
            linear-gradient(rgba(216,202,250,.48), rgba(216,202,250,.48)) right center / 1px 18px no-repeat;
        }

        .cur-core.hovering {
          width: 14px;
          height: 14px;
          margin-left: -7px;
          margin-top: -7px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,.88),
            0 10px 22px rgba(29,19,58,.18);
        }

        .cur-frame.hovering {
          width: 64px;
          height: 64px;
          margin-left: -32px;
          margin-top: -32px;
          color: rgba(245,242,255,0.92);
        }

        .cur-frame.hovering::before {
          border-color: rgba(245,242,255,0.52);
        }

        .cur-frame.hovering::after {
          border-color: rgba(171,140,245,0.32);
        }

        .cur-trail.hovering {
          width: 178px;
          height: 178px;
          margin-left: -89px;
          margin-top: -89px;
          opacity: 0.95;
        }

        .cur-beam.hovering {
          width: 136px;
          height: 92px;
          margin-left: -96px;
          margin-top: -58px;
          opacity: 0.82;
        }

        .cur-core.clicking {
          width: 10px;
          height: 10px;
          margin-left: -5px;
          margin-top: -5px;
          background: linear-gradient(135deg, rgba(255,255,255,.98), rgba(216,202,250,.96));
        }

        .cur-frame.clicking {
          width: 40px;
          height: 40px;
          margin-left: -20px;
          margin-top: -20px;
        }

        .cur-trail.clicking {
          opacity: 1;
        }

        .cur-beam.clicking {
          opacity: 0.92;
        }

        @keyframes cur-guides-shift {
          0%, 100% { opacity: .58; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.04); }
        }

        @keyframes cur-beam-draw {
          0%, 100% { opacity: .4; transform: rotate(-28deg) translateX(-4px); }
          50% { opacity: .88; transform: rotate(-28deg) translateX(4px); }
        }
      `}</style>

      <div ref={coreRef} className="cur-core hidden" />
      <div ref={frameRef} className="cur-frame hidden" />
      <div ref={trailRef} className="cur-trail hidden" />
      <div ref={beamRef} className="cur-beam hidden" />
    </>
  );
}
