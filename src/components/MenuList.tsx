"use client";

import type { Item } from "@/types";
import CategoryList from "./CategoryList";
import { useState } from "react";
import Ordered from "./Ordered";
import {
  Card,
  Tab,
  TabGroup,
  TabPanel,
  TabPanels,
  TabList,
  Button,
  Badge,
} from "@tremor/react";
import { IcBaselineRestartAlt } from "./Icons/IcBaselineRestartAlt";
import DialogBox from "./DialogBox";
import { IcBaselineDomainVerification } from "./Icons/IcBaselineDomainVerification";
import Link from "next/link";

export default function MenuList({ list }: { list: Item[] }) {
  const [itemList, setItemList] = useState<Item[]>(list);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const handleChangeAmount = ({ type, id }: { type: string; id: string }) => {
    let newList: Item[] = [];
    switch (type) {
      case "plus":
        newList = itemList.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        });
        break;
      case "minus":
        newList = itemList.map((item) => {
          if (item.id === id && item.amount > 0) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        break;
    }
    setItemList(newList);
  };

  const categories: string[] = ["メイン", "サイド"];

  return (
    <div className="max-w-lg w-full">
      <Card className="mb-20">
        <div className="flex ">
          <Button
            variant="secondary"
            icon={IcBaselineRestartAlt}
            onClick={() => setIsDialogOpen(true)}
          >
            はじめから
          </Button>
          {isDialogOpen && (
            <DialogBox
              buttonMessage="おっけい"
              message="はじめからやりなおします"
              isopen={isDialogOpen}
              handleOpen={setIsDialogOpen}
              func={() => {
                setItemList(list);
                setIsDialogOpen(false);
              }}
            />
          )}
          <Link href={"/dashbord"} className="mr-0 ml-auto mt-auto mb-0">
            <Badge icon={IcBaselineDomainVerification}>admin</Badge>
          </Link>
        </div>
        <TabGroup>
          <TabList className="">
            {categories.map((category, index) => (
              <Tab key={index}>{category}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {categories.map((category, index) => (
              <TabPanel key={index}>
                <CategoryList
                  handleChangeAmount={handleChangeAmount}
                  list={itemList.filter((item) => item.category == category)}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
        <div className="flex gap-2"></div>
        <Ordered
          itemList={itemList}
          initialList={list}
          handleList={setItemList}
        />
      </Card>
    </div>
  );
}
