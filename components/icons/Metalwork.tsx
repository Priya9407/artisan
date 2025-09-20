export default function MetalworkIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Example anvil or metal hammer icon */}
      <path d="M6 21h12l-3-9h-6l-3 9z" />
      <path d="M8 12l8-3" />
      <line x1="12" y1="3" x2="12" y2="9" />
    </svg>
  );
}
