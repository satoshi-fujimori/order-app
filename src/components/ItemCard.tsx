import type { Item } from "@/types";
import Image from "next/image";
import { IcTwotoneArrowCircleUp } from "./Icons/IcTwotoneArrowCircleUp";
import { IcTwotoneArrowCircleDown } from "./Icons/IcTwotoneArrowCircleDown";

export default function ItemCard({
  item,
  handleChangeAmount,
}: {
  item: Item;
  handleChangeAmount: (args: { type: string; id: string }) => void;
}) {
  return (
    <div className="p-2 grow max-w-1/2">
      <div className="relative aspect-video w-30">
        <Image src={item.url} alt="" fill className="rounded-md" />
      </div>
      <div>
        <p className="text-sm font-semibold font-mono">{item.name}</p>
        <div className="flex justify-between">
          <p className="text-sm font-mono">￥{item.unitPrice}</p>
          <div className="flex gap-x-1">
            <IcTwotoneArrowCircleDown
              onClick={() => handleChangeAmount({ type: "minus", id: item.id })}
            />
            <p className="font-mono font-bold">{item.amount}</p>
            <IcTwotoneArrowCircleUp
              onClick={() => handleChangeAmount({ type: "plus", id: item.id })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
