"use server";

import { client } from "./client";
import { Item, History, PostOrder, FetchedHistory, FetchedItem } from "@/types";

export async function getAllHistories(): Promise<History[]> {
  let data: FetchedHistory[] = [];
  try {
    data = await client.getAllContents({
      endpoint: "order",
    });
  } catch (e) {
    throw e;
  }
  const list = data.map((history) => {
    const { id, totalAmount, totalPrice, item } = history;
    const itemList: Item[] = item.map((obj: any) => {
      const {
        amount,
        itemId: {
          id,
          name,
          fee: unitPrice,
          thumb: { url },
          category,
        },
      } = obj;
      return {
        amount,
        id,
        name,
        unitPrice,
        url,
        category,
      };
    });
    return {
      id,
      date: history.publishedAt,
      totalAmount,
      totalPrice,
      itemList,
    };
  });
  return list;
}

export async function getAllMenu(): Promise<FetchedItem[]> {
  try {
    const menu = await client.getAllContents({
      endpoint: "menu",
    });
    return menu;
  } catch (e) {
    throw e;
  }
}

export async function postOrder(itemList: Item[]) {
  let totalAmount: number = 0;
  let totalPrice: number = 0;
  let items: { fieldId: string; itemId: string; amount: number }[] = [];
  for (let item of itemList) {
    if (item.amount !== 0) {
      totalAmount += item.amount;
      totalPrice += item.amount * item.unitPrice;
      items.push({
        fieldId: "foreign-item",
        itemId: item.id,
        amount: item.amount,
      });
    }
  }
  const data: PostOrder = {
    totalAmount,
    totalPrice,
    item: items,
  };

  try {
    await client.create({
      endpoint: "order",
      content: data,
    });
    console.log("完了");
  } catch (e) {
    console.log(e);
  }
}
