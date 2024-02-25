"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Card, Divider, Icon } from "@tremor/react";
import { CilHamburgerMenu } from "./Icons/CilHamburgerMenu";
import { IcRoundArrowForwardIos } from "./Icons/IcRoundArrowForwardIos";
import { IcBaselineHistory } from "./Icons/IcBaselineHistory";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function NavBar() {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const handleClickIcon = () => setIsOpen(!isopen);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="sticky top-0 z-50 h-12 sm:h-16 mb-2 w-full">
        <header>
          <nav className=" w-full">
            {/*スマホのみ表示*/}
            <div className="sm:hidden">
              <Icon
                icon={CilHamburgerMenu}
                onClick={handleClickIcon}
                variant="solid"
                size="md"
              />
              {isopen && (
                <Card className="bg-blue-300 w-fit">
                  <ul>
                    {menuList.map((menu, i) => (
                      <div className="flex" key={i}>
                        <li className="py-1 text-lg ">
                          <Link href={menu[1]}>{menu[0]}</Link>
                        </li>
                        <Icon icon={IcRoundArrowForwardIos} size="xs" />
                      </div>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
            {/*タブレット以上で表示*/}
            <div className="hidden sm:block pl-4 bg-blue-300">
              <ul className="flex gap-x-4">
                {menuList.map((menu, i) => (
                  <li
                    key={i}
                    className={classNames({
                      "py-4 text-lg font-bold": true,
                      "text-white underline": pathname === menu[1],
                    })}
                  >
                    <Link href={menu[1]}>{menu[0]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>
      </div>
      {/*<div className="absolute top-18 z-0 w-screen">{children}</div>*/}
    </>
  );
}

const menuList = [
  ["order", "/"],
  ["history", "/history"],
  ["dashbord", "/dashbord"],
];
