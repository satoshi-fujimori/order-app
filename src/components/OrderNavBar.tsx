"use client";

import LogoIcon from "./Icons/LogoIcon";
import { caveat } from "./NavBar";
import classNames from "classnames";

export default function OrderNavBar() {
  return (
    <div className="sticky top-0 z-50 flex items-center h-12 sm:h-16 mb-2 w-full bg-tremor-brand">
      <LogoIcon className="h-16" />
      <p className={classNames("block text-3xl", `${caveat.className}`)}>
        Order App
      </p>
    </div>
  );
}
