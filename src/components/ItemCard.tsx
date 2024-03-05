import type { Item } from "@/types";
import Image from "next/image";
import {
  ArrowDownCircleIcon as ArrowDownOutline,
  ArrowUpCircleIcon as ArrowUpOutline,
} from "@heroicons/react/24/outline";

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
        <p className="text-sm">{item.name}</p>
        <div className="flex justify-between">
          <p className="text-sm">￥{item.unitPrice}</p>
          <div className="flex gap-x-1">
            {item.amount !== 0 && (
              <ArrowDownOutline
                className="w-5"
                onClick={() =>
                  handleChangeAmount({ type: "minus", id: item.id })
                }
              />
            )}
            <p>{item.amount}</p>
            <ArrowUpOutline
              className="w-5"
              onClick={() => handleChangeAmount({ type: "plus", id: item.id })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
