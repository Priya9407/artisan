export default function PotteryIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Example Pottery icon: vase shape */}
      <path d="M7 21h10a1 1 0 0 0 1-1v-5a7 7 0 0 0-14 0v5a1 1 0 0 0 1 1z" />
      <path d="M10 7h4" />
      <path d="M9 10h6" />
      <path d="M12 3v4" />
    </svg>
  );
}
