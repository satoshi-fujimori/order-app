"use client";

import { Card, LineChart, AreaChart } from "@tremor/react";
import { useDashboard } from "@/hooks/useDashboard";
import type { History } from "@/types";
import { useHistory } from "@/hooks/useHistory";
import MonthSelection from "./MonthSelection";

export default function EarningChart({
  histories = [],
}: {
  histories?: History[];
}) {
  const { selectedDate, filteredHistories, selections, handleChangeDate } =
    useHistory(histories);
  const { EarningList } = useDashboard(filteredHistories);
  return (
    <Card className="mx-4 w-auto sm:col-span-2">
      <p className="text-lg">Earning Chart</p>
      <MonthSelection
        selectedDate={selectedDate}
        handleChangeDate={handleChangeDate}
        selections={selections}
      />
      <LineChart
        showXAxis={true}
        showYAxis={true}
        showTooltip={true}
        data={EarningList}
        index="date"
        categories={["sumEarnings"]}
      />
    </Card>
  );
}
