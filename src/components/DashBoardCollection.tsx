"use client";

import { History } from "@/types";
import MenuRankBar from "./MenuRankBar";
import EarningChart from "./EarningChart";

export default function DashBoardCollection({
  histories,
}: {
  histories: History[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-y-4">
      <MenuRankBar histories={histories} by="amount" />
      <MenuRankBar histories={histories} by="earning" />
      <EarningChart histories={histories} />
    </div>
  );
}
