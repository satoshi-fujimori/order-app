import MenuList from "@/components/MenuList";
import { Item, FetchedItem } from "@/types";
import { getAllMenu } from "@/libs/actions";

export const dynamic = "force-dynamic";

export default async function Main() {
  let data: FetchedItem[] = [];
  try {
    data = await getAllMenu();
  } catch (e) {
    console.log(e);
  }
  let list: Item[] = [];
  for (let item of data) {
    const newObj: Item = {
      category: item.category,
      id: item.id,
      name: item.name,
      unitPrice: item.fee,
      url: item.thumb.url,
      amount: 0,
    };
    list.push(newObj);
  }

  return (
    <div className="flex flex-col items-center">
      <MenuList list={list} />
    </div>
  );
}
