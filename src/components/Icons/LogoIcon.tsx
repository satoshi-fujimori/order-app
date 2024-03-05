export default function LogoIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      className={className}
    >
      {/* ロゴの要素 */}
      <path d="M50 20a25 25 0 0 0-25 25h50a25 25 0 0 0-25-25z" fill="#FF6347" />
      <path d="M50 80a25 25 0 0 0 25-25H25a25 25 0 0 0 25 25z" fill="#FF6347" />
      <path d="M50 55L25 80H75z" fill="#FFD700" />
      <path d="M50 45L75 20H25z" fill="#FFD700" />
    </svg>
  );
}
