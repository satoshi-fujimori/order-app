"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Select,
  SelectItem,
} from "@tremor/react";

import { History } from "@/types";
import { useModal } from "@/providers/ModalProvider";
import OrderDetails from "./OrderDetails";
import { useHistory } from "@/hooks/useHistory";
import MonthSelection from "./MonthSelection";

export const HistoryTable = ({ histories }: { histories: History[] }) => {
  const tableHeader: string[] = ["DATE", "TIME", "TOTAL_AMOUNT", "TOTAL_PRICE"];
  const { openModal } = useModal();
  const { filteredHistories, handleChangeDate, selections, selectedDate } =
    useHistory(histories);
  return (
    <div>
      <MonthSelection
        handleChangeDate={handleChangeDate}
        selections={selections}
        selectedDate={selectedDate}
      />
      <div className="mx-auto my-4 max-w-2xl shadow-md">
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader.map((header, i) => (
                <TableHeaderCell key={i}>{header}</TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredHistories.map((history, i) => {
              const dateObj: Date = new Date(history.date);
              return (
                <TableRow
                  key={i}
                  onClick={() =>
                    openModal(<OrderDetails itemList={history.itemList} />)
                  }
                >
                  <TableCell>{dateObj.toLocaleDateString()}</TableCell>
                  <TableCell>
                    {dateObj.toLocaleString("ja-JP", {
                      timeZone: "Asia/Tokyo",
                      hour12: false,
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    {history.totalAmount}
                  </TableCell>
                  <TableCell className="text-right">
                    {history.totalPrice}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
