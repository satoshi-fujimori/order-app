"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Card, Divider, Icon } from "@tremor/react";
import { CilHamburgerMenu } from "./Icons/CilHamburgerMenu";
import { IcRoundArrowForwardIos } from "./Icons/IcRoundArrowForwardIos";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import {
  DevicePhoneMobileIcon,
  ChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { Caveat } from "next/font/google";

export const caveat = Caveat({ subsets: ["latin"], weight: "600" });

const menuList: { label: string; url: string; icon: ReactNode }[] = [
  { label: "order", url: "/", icon: <DevicePhoneMobileIcon className="w-5" /> },
  {
    label: "history",
    url: "/history",
    icon: <TableCellsIcon className="w-5" />,
  },
  {
    label: "dashbord",
    url: "/dashbord",
    icon: <ChartBarIcon className="w-5" />,
  },
];

export default function NavBar() {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const handleClickIcon = () => setIsOpen(!isopen);
  const pathname = usePathname();

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
                variant="simple"
                size="lg"
              />
              {isopen && (
                <Card className="bg-tremor-brand-faint w-full">
                  <ul>
                    {menuList.map((menu, i) => (
                      <div className="flex" key={i}>
                        <li
                          className={classNames(
                            "py-1 text-lg flex gap-4",
                            `${caveat.className}`
                          )}
                        >
                          {menu.icon}
                          <Link href={menu.url}>{menu.label}</Link>
                        </li>
                        <Icon icon={IcRoundArrowForwardIos} size="xs" />
                      </div>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
            {/*タブレット以上で表示*/}
            <div className="hidden sm:block pl-4 bg-tremor-brand">
              <ul className="flex gap-x-4">
                {menuList.map((menu, i) => (
                  <li
                    key={i}
                    className={classNames({
                      "py-4 text-lg font-bold flex gap-1": true,
                      [caveat.className]: true,
                      "text-white underline": pathname === menu.url,
                    })}
                  >
                    {menu.icon}
                    <Link href={menu.url}>{menu.label}</Link>
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
