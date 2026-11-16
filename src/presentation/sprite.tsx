import { useId } from "react";

export type SpriteVariant = "jellyfish" | "carrot" | "columns" | "ring" | "jet";

function box(variant: SpriteVariant) {
  if (variant === "carrot") return "0 0 160 460";
  if (variant === "columns") return "0 0 300 440";
  if (variant === "ring") return "0 0 320 150";
  if (variant === "jet") return "0 0 140 460";
  return "0 0 260 460";
}

export function Sprite({
  variant = "jellyfish",
  className = "",
  live = true,
}: {
  variant?: SpriteVariant;
  className?: string;
  live?: boolean;
}) {
  const gid = `s${useId().replace(/:/g, "")}`;
  return (
    <svg
      className={`sprite ${live ? "live" : ""} v-${variant} ${className}`}
      viewBox={box(variant)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${gid}-t`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-ember-hot)" />
          <stop offset="46%" stopColor="var(--color-ember)" />
          <stop offset="100%" stopColor="var(--color-tendril)" />
        </linearGradient>
        <radialGradient id={`${gid}-cap`} cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="var(--color-ember-hot)" stopOpacity="0.95" />
          <stop offset="46%" stopColor="var(--color-ember)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--color-ember)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gid}-jet`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-tendril)" stopOpacity="0.95" />
          <stop offset="70%" stopColor="var(--color-tendril)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-tendril)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {variant === "jellyfish" && <Jellyfish id={gid} />}
      {variant === "carrot" && <Carrot id={gid} />}
      {variant === "columns" && <Columns id={gid} />}
      {variant === "ring" && <Ring id={gid} />}
      {variant === "jet" && <Jet id={gid} />}
    </svg>
  );
}

function Jellyfish({ id }: { id: string }) {
  const stroke = `url(#${id}-t)`;
  return (
    <g className="flash" fill="none" stroke={stroke} strokeLinecap="round">
      <ellipse cx="130" cy="78" rx="86" ry="32" fill={`url(#${id}-cap)`} stroke="none" />
      <path d="M62 92 C 58 150, 48 190, 70 250" strokeWidth="1.1" />
      <path d="M84 100 C 78 170, 96 230, 74 320" strokeWidth="1.25" />
      <path d="M108 104 C 112 190, 92 260, 114 370" strokeWidth="1.45" />
      <path d="M132 108 C 128 200, 146 270, 124 400" strokeWidth="1.6" />
      <path d="M156 104 C 162 190, 140 250, 168 360" strokeWidth="1.35" />
      <path d="M178 98 C 188 160, 170 220, 186 300" strokeWidth="1.15" />
      <path d="M198 90 C 206 140, 192 180, 208 236" strokeWidth="1" />
      <path d="M96 210 C 88 240, 104 260, 90 290" strokeWidth="0.7" opacity="0.8" />
      <path d="M150 230 C 160 270, 142 300, 166 340" strokeWidth="0.7" opacity="0.75" />
    </g>
  );
}

function Carrot({ id }: { id: string }) {
  const stroke = `url(#${id}-t)`;
  return (
    <g className="flash" fill="none" stroke={stroke} strokeLinecap="round">
      <ellipse cx="80" cy="54" rx="36" ry="16" fill={`url(#${id}-cap)`} stroke="none" />
      <path d="M80 66 C 78 140, 86 220, 76 340 C 74 380, 82 400, 78 430" strokeWidth="2.2" />
      <path d="M80 120 C 58 150, 50 170, 46 196" strokeWidth="1" />
      <path d="M80 150 C 104 182, 114 196, 120 214" strokeWidth="1" />
      <path d="M78 210 C 56 236, 48 250, 42 272" strokeWidth="0.9" />
      <path d="M80 240 C 102 268, 112 286, 118 310" strokeWidth="0.9" />
      <path d="M77 300 C 60 322, 58 336, 64 352" strokeWidth="0.8" />
    </g>
  );
}

function Columns({ id }: { id: string }) {
  const stroke = `url(#${id}-t)`;
  const cols = [
    "M40 70 C 36 160, 48 240, 34 340",
    "M90 40 C 86 150, 98 250, 82 400",
    "M140 58 C 146 170, 132 260, 148 390",
    "M190 48 C 184 160, 200 250, 186 410",
    "M240 80 C 246 170, 232 250, 248 330",
  ];
  return (
    <g className="cols" fill="none" stroke={stroke} strokeLinecap="round">
      {cols.map((d) => (
        <path key={d} className="col" d={d} strokeWidth="1.35" />
      ))}
    </g>
  );
}

function Ring({ id }: { id: string }) {
  return (
    <g className="flash" fill="none">
      <ellipse
        cx="160"
        cy="76"
        rx="130"
        ry="42"
        stroke="var(--color-ember)"
        strokeWidth="6"
        opacity="0.35"
      />
      <ellipse
        cx="160"
        cy="76"
        rx="108"
        ry="30"
        stroke={`url(#${id}-t)`}
        strokeWidth="1.4"
      />
    </g>
  );
}

function Jet({ id }: { id: string }) {
  return (
    <g className="flash">
      <path
        d="M70 450 C 62 320, 66 180, 70 40 C 74 180, 78 320, 70 450 Z"
        fill={`url(#${id}-jet)`}
      />
    </g>
  );
}
