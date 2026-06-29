import React from 'react';
import { Brain, Camera, Cpu, Factory } from 'lucide-react';

const hexPoints = (x: number, y: number, r: number) => {
  const c = 0.866;
  return [
    `${x},${y - r}`,
    `${x + c * r},${y - r / 2}`,
    `${x + c * r},${y + r / 2}`,
    `${x},${y + r}`,
    `${x - c * r},${y + r / 2}`,
    `${x - c * r},${y - r / 2}`,
  ].join(' ');
};

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

type FieldIcon = React.ComponentType<IconProps>;

type Cell = {
  x: number;
  y: number;
  r: number;
  a: number;
  icon?: FieldIcon;
  delay?: number;
  darkIcon?: boolean;
  iconScale?: number;
};

type MinorCell = {
  x: number;
  y: number;
  r: number;
  icon: FieldIcon;
  delay: number;
  iconScale?: number;
};

const HumanoidRobot = ({ className, strokeWidth = 1.6 }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8v6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="32" cy="6" r="2.5" fill="currentColor" />
    <rect x="20" y="14" width="24" height="18" rx="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="27" cy="23" r="2" fill="currentColor" />
    <circle cx="37" cy="23" r="2" fill="currentColor" />
    <path d="M27 29h10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <rect x="22" y="36" width="20" height="18" rx="5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M16 38l-6 7 5 5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 38l6 7-5 5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 43h20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.7" />
    <path d="M28 54l-4 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M36 54l4 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const SensorIcon = ({ className, strokeWidth = 1.7 }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.28" />
    <circle cx="32" cy="32" r="15" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M32 10v8M32 46v8M10 32h8M46 32h8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M21 21l-6-6M43 21l6-6M21 43l-6 6M43 43l6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.7" />
  </svg>
);

const RoboticMotionIcon = ({ className, strokeWidth = 1.7 }: IconProps) => {
  const heavyStroke = strokeWidth + 1.4;
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 44L32 26L48 44" stroke="currentColor" strokeWidth={heavyStroke + 1.4} strokeLinecap="round" strokeLinejoin="round" opacity="0.18" />
      <path d="M16 44L32 26L48 44" stroke="currentColor" strokeWidth={heavyStroke} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="44" r="8" stroke="currentColor" strokeWidth={heavyStroke} />
      <circle cx="32" cy="26" r="8" stroke="currentColor" strokeWidth={heavyStroke} />
      <circle cx="48" cy="44" r="8" stroke="currentColor" strokeWidth={heavyStroke} />
      <circle cx="16" cy="44" r="2.8" fill="currentColor" />
      <circle cx="32" cy="26" r="2.8" fill="currentColor" />
      <circle cx="48" cy="44" r="2.8" fill="currentColor" />
      <path d="M40 13c7 3 12 9 14 17" stroke="currentColor" strokeWidth={strokeWidth + 0.7} strokeLinecap="round" />
      <path d="M50 28l5 3 3-5" stroke="currentColor" strokeWidth={strokeWidth + 0.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const DdrMemoryIcon = ({ className, strokeWidth = 1.7 }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="22" width="36" height="20" rx="4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M20 42v7M26 42v7M32 42v7M38 42v7M44 42v7M20 15v7M26 15v7M32 15v7M38 15v7M44 15v7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M22 29h20M22 35h14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.75" />
  </svg>
);

const ThermalIcon = ({ className, strokeWidth = 1.7 }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 36V16a7 7 0 0 1 14 0v20a15 15 0 1 1-14 0Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 20v23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="36" cy="45" r="5" fill="currentColor" opacity="0.35" />
    <path d="M16 20c5-6 4-11 0-16M19 36c5-6 4-11 0-16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.6" />
  </svg>
);

const ModelDriftIcon = ({ className, strokeWidth = 1.7 }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 50h40" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.55" />
    <path d="M18 44c8-9 15-12 22-8 5 3 8 2 13-4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 36c3-13 7-20 15-23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M52 13h7v7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="44" r="3.8" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="34" cy="35" r="4.2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="52" cy="17" r="4.8" fill="currentColor" opacity="0.26" />
    <path d="M23 22c-2-8 4-12 9-8 4-7 14-3 12 5 6 1 8 9 2 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" opacity="0.72" />
  </svg>
);

const cells: Cell[] = [
  { x: 230, y: 660, r: 34, a: 0.18 },
  { x: 330, y: 604, r: 52, a: 0.24 },
  { x: 430, y: 700, r: 28, a: 0.16 },
  { x: 510, y: 548, r: 68, a: 0.38, icon: Factory, delay: 0.2 },
  { x: 628, y: 636, r: 48, a: 0.38, icon: HumanoidRobot, delay: 1.0, iconScale: 0.88 },
  { x: 728, y: 492, r: 82, a: 0.56, icon: Camera, delay: 1.8, darkIcon: true, iconScale: 0.94 },
  { x: 840, y: 574, r: 30, a: 0.22 },
  { x: 940, y: 414, r: 78, a: 0.48, icon: Cpu, delay: 2.8 },
  { x: 1084, y: 498, r: 42, a: 0.26 },
  { x: 1184, y: 344, r: 62, a: 0.5, icon: HumanoidRobot, delay: 4.0, iconScale: 0.86 },
  { x: 1316, y: 416, r: 34, a: 0.24 },
  { x: 1394, y: 264, r: 72, a: 0.52, icon: Brain, delay: 5.0 },
  { x: 1540, y: 334, r: 46, a: 0.26 },
  { x: 414, y: 402, r: 30, a: 0.14 },
  { x: 540, y: 334, r: 42, a: 0.18 },
  { x: 680, y: 378, r: 24, a: 0.16 },
  { x: 806, y: 286, r: 44, a: 0.24 },
  { x: 960, y: 288, r: 26, a: 0.18 },
  { x: 1104, y: 206, r: 42, a: 0.24 },
  { x: 1264, y: 174, r: 30, a: 0.2 },
  { x: 1460, y: 132, r: 40, a: 0.22 },
];

const minorCells: MinorCell[] = [
  { x: 650, y: 278, r: 46, icon: SensorIcon, delay: 0.6 },
  { x: 962, y: 566, r: 52, icon: RoboticMotionIcon, delay: 1.2, iconScale: 1.18 },
  { x: 1060, y: 234, r: 46, icon: DdrMemoryIcon, delay: 2.2 },
  { x: 1168, y: 540, r: 50, icon: ThermalIcon, delay: 3.2 },
  { x: 1348, y: 442, r: 52, icon: ModelDriftIcon, delay: 4.4 },
];

const flows = [
  'M226 684 C392 574 520 646 706 500 C886 360 1018 430 1192 306 C1326 212 1434 210 1608 118',
  'M326 620 C510 472 640 560 822 414 C986 282 1112 322 1286 224 C1412 154 1510 146 1640 176',
  'M470 742 C626 616 760 668 918 530 C1084 386 1228 452 1388 314 C1510 210 1582 238 1660 196',
  'M408 420 C574 338 710 394 870 300 C1018 212 1150 250 1302 166 C1430 96 1526 104 1648 72',
  'M188 736 C406 700 534 518 738 540 C934 562 1052 406 1226 388 C1402 370 1510 276 1668 260',
];

type CorrectionFieldProps = {
  idPrefix?: string;
  className?: string;
};

export default function CorrectionField({ idPrefix = 'correction-field', className = '' }: CorrectionFieldProps) {
  const gridId = `${idPrefix}-grid`;
  const cellFillId = `${idPrefix}-cell-fill`;
  const flowStrokeId = `${idPrefix}-flow-stroke`;
  const flowGlowId = `${idPrefix}-flow-glow`;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id={gridId} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M8 0H0V8" stroke="currentColor" strokeWidth="0.25" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`} />
        </svg>
      </div>

      <svg viewBox="0 0 1720 820" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id={cellFillId} cx="50%" cy="48%" r="68%">
            <stop offset="0%" stopColor="#77DB89" stopOpacity="0.18" />
            <stop offset="58%" stopColor="#77DB89" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
          </radialGradient>
          <linearGradient id={flowStrokeId} x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="44%" stopColor="#77DB89" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#d8ffe0" stopOpacity="0.18" />
          </linearGradient>
          <filter id={flowGlowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.14">
          {Array.from({ length: 12 }).map((_, index) => (
            <path
              key={`axis-a-${index}`}
              d={`M${-140 + index * 160} 860 L${420 + index * 160} -60`}
              stroke="white"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <path
              key={`axis-b-${index}`}
              d={`M-120 ${180 + index * 86} L1820 ${-160 + index * 86}`}
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </g>

        <g opacity="0.84">
          {minorCells.map((cell, index) => {
            const MinorIcon = cell.icon;
            const iconSize = cell.r * (cell.iconScale ?? 0.9);
            return (
              <g key={`${cell.x}-${cell.y}`}>
                <polygon
                  points={hexPoints(cell.x, cell.y, cell.r)}
                  fill="rgba(119,219,137,0.055)"
                  stroke="#ff5a40"
                  strokeWidth="1.05"
                >
                  <animate attributeName="opacity" values="0.48;0.86;0.54" dur={`${6.2 + index * 0.55}s`} repeatCount="indefinite" />
                  <animate
                    attributeName="stroke"
                    values="#ff5a40;#77DB89;#77DB89;#ff5a40"
                    dur="8.8s"
                    begin={`${cell.delay}s`}
                    repeatCount="indefinite"
                  />
                </polygon>
                <polyline
                  points={`${cell.x - cell.r * 0.48},${cell.y + cell.r * 0.18} ${cell.x},${cell.y - cell.r * 0.16} ${cell.x + cell.r * 0.48},${cell.y + cell.r * 0.18}`}
                  fill="none"
                  stroke="rgba(119,219,137,0.34)"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                <circle cx={cell.x - cell.r * 0.48} cy={cell.y + cell.r * 0.18} r="2.3" fill="rgba(119,219,137,0.54)" />
                <circle cx={cell.x} cy={cell.y - cell.r * 0.16} r="2.3" fill="rgba(119,219,137,0.54)" />
                <circle cx={cell.x + cell.r * 0.48} cy={cell.y + cell.r * 0.18} r="2.3" fill="rgba(119,219,137,0.54)" />
                <foreignObject x={cell.x - iconSize / 2} y={cell.y - iconSize / 2} width={iconSize} height={iconSize}>
                  <div
                    className="correction-icon correction-icon-secondary w-full h-full flex items-center justify-center"
                    style={{ animationDelay: `${cell.delay}s` }}
                  >
                    <MinorIcon className="w-full h-full" strokeWidth={1.75} />
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </g>

        <g>
          {cells.map((cell, index) => {
            const Icon = cell.icon;
            const a = cell.r * 0.34;
            const b = cell.r * 0.64;
            const iconSize = cell.r * (cell.iconScale ?? 0.72);
            return (
              <g key={`${cell.x}-${cell.y}`} opacity={cell.a + 0.34}>
                <polygon
                  points={hexPoints(cell.x, cell.y, cell.r)}
                  fill={`url(#${cellFillId})`}
                  stroke={cell.icon ? '#ff5a40' : 'rgba(119,219,137,0.42)'}
                  strokeWidth={cell.icon ? 1.55 : 0.8}
                >
                  <animate attributeName="opacity" values="0.52;0.96;0.58" dur={`${5.4 + (index % 6) * 0.48}s`} repeatCount="indefinite" />
                  {cell.icon && (
                    <animate
                      attributeName="stroke"
                      values="#ff5a40;#77DB89;#77DB89;#ff5a40"
                      dur="8.8s"
                      begin={`${cell.delay ?? 0}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </polygon>
                <polyline
                  points={`${cell.x - b},${cell.y + a} ${cell.x - a},${cell.y - a} ${cell.x + a},${cell.y - a} ${cell.x + b},${cell.y + a}`}
                  fill="none"
                  stroke="rgba(119,219,137,0.34)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <polyline
                  points={`${cell.x - a},${cell.y + b * 0.35} ${cell.x},${cell.y} ${cell.x + a},${cell.y + b * 0.35}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx={cell.x - a} cy={cell.y - a} r={Math.max(2, cell.r * 0.045)} fill="rgba(119,219,137,0.7)" />
                <circle cx={cell.x + a} cy={cell.y - a} r={Math.max(2, cell.r * 0.045)} fill="rgba(119,219,137,0.54)" />
                <circle cx={cell.x} cy={cell.y} r={Math.max(2, cell.r * 0.052)} fill="rgba(255,255,255,0.42)" />
                <circle cx={cell.x + b} cy={cell.y + a} r={Math.max(2, cell.r * 0.04)} fill="rgba(119,219,137,0.46)" />
                {Icon && (
                  <foreignObject x={cell.x - iconSize / 2} y={cell.y - iconSize / 2} width={iconSize} height={iconSize}>
                    <div
                      className={`correction-icon ${cell.darkIcon ? 'correction-icon-dark' : ''} w-full h-full flex items-center justify-center`}
                      style={{ animationDelay: `${cell.delay ?? 0}s` }}
                    >
                      <Icon className="w-full h-full" strokeWidth={1.65} />
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </g>

        <g opacity="0.9">
          {flows.map((pathData, index) => (
            <g key={pathData}>
              <path
                d={pathData}
                fill="none"
                stroke={`url(#${flowStrokeId})`}
                strokeWidth={index === 0 ? 2.2 : 1.15}
                strokeDasharray="1 20"
                strokeLinecap="round"
                opacity={index === 0 ? 0.92 : 0.42}
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-178" dur={`${8.2 + index * 1.25}s`} repeatCount="indefinite" />
              </path>
              <circle r={index === 0 ? 6 : 4} fill="#77DB89" filter={`url(#${flowGlowId})`} opacity={index === 0 ? 0.95 : 0.5}>
                <animate attributeName="fill" values="#ff5a40;#77DB89;#77DB89" dur={`${6.8 + index * 1.25}s`} repeatCount="indefinite" />
                <animateMotion path={pathData} dur={`${6.8 + index * 1.25}s`} begin={`${index * 0.6}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
