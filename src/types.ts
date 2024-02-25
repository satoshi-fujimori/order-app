export type Item = {
  id: string;
  category: string;
  url: string;
  name: string;
  amount: number;
  unitPrice: number;
};

export type FetchedItem = {
  id: string;
  category: string;
  url: string;
  name: string;
  amount: number;
  fee: number;
  thumb: { url: string };
};

export type History = {
  id: string;
  date: string;
  totalAmount: number;
  totalPrice: number;
  itemList: Item[];
};

export type FetchedHistory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  totalAmount: number;
  totalPrice: number;
  item: [];
};

export type RankedMenu = {
  id: string;
  name: string;
  sumAmount: number;
  sumEarnings: number;
};

export type DayEarning = {
  date: string;
  sumEarnings: number;
};

export type PostOrder = {
  totalAmount: number;
  totalPrice: number;
  item: {
    fieldId: string;
    itemId: string;
    amount: number;
  }[];
};
