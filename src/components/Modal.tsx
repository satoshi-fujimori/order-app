import { ReactNode } from "react";

export default function Modal({
  children,
  onClose,
  className,
}: {
  children?: ReactNode;
  onClose: () => void;
  className?: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-gray-700 opacity-90"
      onClick={onClose}
    >
      <div
        className="fixed z-50 shadow-md items-center bg-white w-full h-fit
                    justify-center rounded-lg bottom-0 overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}
