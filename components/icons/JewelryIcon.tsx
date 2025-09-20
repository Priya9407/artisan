export default function JewelryIcon({ size = 24, color = "currentColor" }) {
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
      {/* Example Jewelry icon: diamond shape */}
      <path d="M12 2L7 9l5 13 5-13-5-7z" />
      <path d="M7 9h10" />
      <path d="M12 15l5-6" />
      <path d="M12 15l-5-6" />
    </svg>
  );
}
