import { SVGProps } from "react";

export function CilHamburgerMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"
      ></path>
    </svg>
  );
}
