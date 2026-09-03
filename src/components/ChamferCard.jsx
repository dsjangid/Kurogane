import React from 'react';

/**
 * ChamferCard provides a top-left 45-degree angled cut with a continuous 1px thin outline.
 */
export default function ChamferCard({
  children,
  className = '',
  cutSize = 28, // pixels for 45-degree cut
  borderColor = 'rgba(255, 255, 255, 0.12)',
  activeBorderColor = '#e53e3e',
  isActive = false,
  bgClass = 'bg-[#0d0d11]',
  lightTheme = false,
  onClick,
  onMouseEnter,
  onMouseLeave
}) {
  const currentBorder = isActive ? activeBorderColor : (lightTheme ? 'rgba(0, 0, 0, 0.15)' : borderColor);

  // Points for top-left cut: (cutSize, 0) -> (100%, 0) -> (100%, 100%) -> (0, 100%) -> (0, cutSize)
  const outerPolygon = `polygon(${cutSize}px 0, 100% 0, 100% 100%, 0 100%, 0 ${cutSize}px)`;
  const innerPolygon = `polygon(${Math.max(0, cutSize - 1)}px 0, 100% 0, 100% 100%, 0 100%, 0 ${Math.max(0, cutSize - 1)}px)`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative p-[1px] transition-all duration-200 ${className}`}
      style={{
        clipPath: outerPolygon,
        backgroundColor: currentBorder
      }}
    >
      <div
        className={`w-full h-full relative ${bgClass}`}
        style={{
          clipPath: innerPolygon
        }}
      >
        {/* Subtle diagonal corner accent tick on the cut edge */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: `${cutSize}px`,
            height: `${cutSize}px`,
          }}
        >
          <div
            className="w-[1px] h-full origin-top-left -rotate-45"
            style={{
              backgroundColor: isActive ? '#e53e3e' : (lightTheme ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'),
              height: `${Math.SQRT2 * cutSize}px`
            }}
          />
        </div>

        {children}
      </div>
    </div>
  );
}
