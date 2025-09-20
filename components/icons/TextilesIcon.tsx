export default function TextilesIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Example textile pattern: a simple weaving design */}
      <path d="M3 3l18 18" />
      <path d="M7 3l14 14" />
      <path d="M3 7l18 18" />
      <path d="M3 15l18-18" />
      <path d="M11 3v18" />
      <path d="M3 11h18" />
    </svg>
  );
}
