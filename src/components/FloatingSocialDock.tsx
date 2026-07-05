"use client";

import type { CSSProperties } from "react";
import { companyContact } from "@/lib/contact";
import { colors } from "@/lib/colors";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const quickActions = [
  {
    label: "WhatsApp",
    caption: "Start a quick chat",
    href: companyContact.socials.whatsapp,
    icon: FaWhatsapp,
    accent: "linear-gradient(135deg, rgba(37, 211, 102, 0.95), rgba(14, 154, 73, 0.92))",
    glow: "rgba(37, 211, 102, 0.34)",
  },
  {
    label: "LinkedIn",
    caption: "See our network",
    href: companyContact.socials.linkedin,
    icon: FaLinkedinIn,
    accent: "linear-gradient(135deg, rgba(10, 102, 194, 0.95), rgba(74, 144, 226, 0.92))",
    glow: "rgba(10, 102, 194, 0.3)",
  },
] as const;

export default function FloatingSocialDock() {
  return (
    <>
      <style>{`
        .floating-social-dock {
          position: fixed;
          right: 32px;
          bottom: 92px;
          z-index: 998;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          pointer-events: none;
        }
        .floating-social-dock-panel {
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
        }
        .floating-social-dock-chip {
          align-self: flex-end;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(59, 37, 112, 0.92), rgba(122, 89, 206, 0.82));
          border: 1px solid rgba(216, 202, 250, 0.22);
          box-shadow:
            0 18px 40px rgba(40, 23, 80, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(16px);
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .floating-social-dock-chip::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${colors.secondary};
          box-shadow: 0 0 14px rgba(171, 140, 245, 0.8);
        }
        .floating-social-link {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr) 18px;
          align-items: center;
          gap: 12px;
          min-width: 216px;
          padding: 10px 14px 10px 10px;
          border-radius: 20px;
          background:
            linear-gradient(145deg, rgba(33, 20, 68, 0.92) 0%, rgba(74, 48, 138, 0.9) 56%, rgba(168, 138, 245, 0.7) 100%);
          border: 1px solid rgba(216, 202, 250, 0.2);
          box-shadow:
            0 18px 44px rgba(40, 23, 80, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(18px);
          transition:
            transform 0.28s ease,
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            background 0.28s ease;
        }
        .floating-social-link::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(216, 202, 250, 0.08) 40%, transparent 72%);
          opacity: 0.9;
          z-index: -2;
        }
        .floating-social-link::after {
          content: "";
          position: absolute;
          inset: -30% -10%;
          background: radial-gradient(circle, var(--dock-glow) 0%, transparent 62%);
          opacity: 0;
          transition: opacity 0.28s ease;
          z-index: -1;
        }
        .floating-social-link:hover {
          transform: translateY(-4px) translateX(-2px);
          border-color: rgba(216, 202, 250, 0.34);
          box-shadow:
            0 24px 56px rgba(40, 23, 80, 0.3),
            0 0 0 1px rgba(216, 202, 250, 0.12);
        }
        .floating-social-link:hover::after { opacity: 1; }
        .floating-social-icon {
          width: 48px;
          height: 48px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--dock-accent);
          color: ${colors.white};
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            0 10px 24px rgba(10, 6, 24, 0.18);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .floating-social-link:hover .floating-social-icon {
          transform: scale(1.04);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.16),
            0 12px 24px var(--dock-glow);
        }
        .floating-social-copy {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .floating-social-title {
          color: ${colors.white};
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .floating-social-caption {
          color: rgba(242, 236, 255, 0.74);
          font-size: 0.74rem;
          line-height: 1.3;
          margin-top: 4px;
          white-space: nowrap;
        }
        .floating-social-arrow {
          color: rgba(255, 255, 255, 0.7);
          transition: transform 0.28s ease, color 0.28s ease;
        }
        .floating-social-link:hover .floating-social-arrow {
          transform: translate(2px, -2px);
          color: ${colors.white};
        }
        @media (max-width: 600px) {
          .floating-social-dock {
            right: 20px;
            bottom: 78px;
            gap: 8px;
          }
          .floating-social-link {
            min-width: 188px;
            grid-template-columns: 42px minmax(0, 1fr) 16px;
            gap: 10px;
            padding: 9px 12px 9px 9px;
            border-radius: 18px;
          }
          .floating-social-icon {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }
          .floating-social-title {
            font-size: 0.84rem;
          }
          .floating-social-caption {
            font-size: 0.68rem;
          }
        }
      `}</style>

      <div className="floating-social-dock" aria-label="Quick social links">
        <div className="floating-social-dock-panel">
          <div className="floating-social-dock-chip">Connect</div>
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                className="floating-social-link"
                href={action.href}
                target="_blank"
                rel="noreferrer"
                aria-label={action.label}
                style={
                  {
                    "--dock-accent": action.accent,
                    "--dock-glow": action.glow,
                  } as CSSProperties
                }
              >
                <span className="floating-social-icon">
                  <Icon size={20} />
                </span>
                <span className="floating-social-copy">
                  <span className="floating-social-title">{action.label}</span>
                  <span className="floating-social-caption">{action.caption}</span>
                </span>
                <span className="floating-social-arrow" aria-hidden="true">
                  <FiArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
