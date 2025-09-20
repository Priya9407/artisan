export default function PaintingsIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Example canvas or frame */}
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
      <path d="M8 12l3 3 5-5" />
    </svg>
  );
}
