import { HistoryTable } from "@/components/HistoryTable";
import NavBar from "@/components/NavBar";
import { getAllHistories } from "@/libs/actions";
import { Item, History } from "@/types";

export const dynamic = "force-dynamic";

export default async function HistoryPage() {
  let histories: History[] = [];
  try {
    histories = await getAllHistories();
  } catch (e) {
    console.log(e);
  }
  return (
    <div>
      <NavBar />
      <HistoryTable histories={histories} />
    </div>
  );
}
