import { Item } from "@/types";
import Image from "next/image";

export default function OrderDetails({ itemList }: { itemList: Item[] }) {
  const filteredItems = itemList.filter((item) => item.amount !== 0);
  return (
    <div className="p-2 bg-tremor-brand bg-opacity-100">
      {filteredItems.map((item, index) => (
        <div key={index} className="flex gap-2 m-2">
          <Image
            src={item.url}
            alt=""
            width={60}
            height={10}
            className="rounded-md"
          />
          <p className="text-white">
            {item.name}：{item.amount}こ　￥{item.unitPrice * item.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
