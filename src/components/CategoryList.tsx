import { Item } from "@/types";
import ItemCard from "./ItemCard";
export default function CategoryList({
  list,
  handleChangeAmount,
}: {
  list: Item[];
  handleChangeAmount: (args: { type: string; id: string }) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 justify-between ">
      {list.map((item, i) => (
        <ItemCard item={item} key={i} handleChangeAmount={handleChangeAmount} />
      ))}
    </div>
  );
}
