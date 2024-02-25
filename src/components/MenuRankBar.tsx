import { BarList, Card, Select, SelectItem } from "@tremor/react";
import { History } from "@/types";
import { useHistory } from "@/hooks/useHistory";
import { useDashboard } from "@/hooks/useDashboard";
import MonthSelection from "./MonthSelection";

export default function MenuRankBar({
  histories,
  by,
}: {
  histories: History[];
  by: "amount" | "earning";
}) {
  const { filteredHistories, selections, handleChangeDate, selectedDate } =
    useHistory(histories);
  const { MenuRankList } = useDashboard(filteredHistories);

  const formattedData: { name: string; value: number }[] = MenuRankList.map(
    (menu) => {
      let value: number;
      switch (by) {
        case "amount":
          value = menu.sumAmount;
          break;
        case "earning":
          value = menu.sumEarnings;
          break;
      }
      return {
        name: menu.name,
        value,
      };
    }
  );
  formattedData.sort((a, b) => b.value - a.value);

  return (
    <Card className="mx-4 w-auto">
      <p className="text-lg text-tremor-content-strong">Menu Rank by {by}</p>
      <MonthSelection
        selections={selections}
        selectedDate={selectedDate}
        handleChangeDate={handleChangeDate}
      />
      <BarList data={formattedData} />
    </Card>
  );
}
