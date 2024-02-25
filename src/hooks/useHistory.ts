import { History } from "@/types";
import { useState } from "react";

export function useHistory(histories: History[]) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredHistories, setFilteredHistories] =
    useState<History[]>(histories);

  function createDate(date: string) {
    const dateObj = new Date(date);
    return (
      dateObj.getFullYear().toString() + (dateObj.getMonth() + 1).toString()
    );
  }

  const selections: string[] = ["all"];
  histories.forEach((history) => {
    const formattedDate = createDate(history.date);
    if (!selections.includes(formattedDate)) {
      selections.push(formattedDate);
    }
  });

  const filterHistories = (histories: History[], dateStr: string) => {
    if (dateStr !== "all") {
      const newList = histories.filter(
        (history) => createDate(history.date) === dateStr
      );
      setFilteredHistories((prev) => newList);
    } else {
      setFilteredHistories((prev) => histories);
    }
  };

  const handleChangeDate = (value: string) => {
    filterHistories(histories, value);
    setSelectedDate((prev) => value);
  };

  return { filteredHistories, handleChangeDate, selections, selectedDate };
}
