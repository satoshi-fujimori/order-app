import DashBoardCollection from "@/components/DashBoardCollection";
import NavBar from "@/components/NavBar";
import { getAllHistories } from "@/libs/actions";
import { History } from "@/types";

export const dynamic = "force-dynamic";

export default async function DashbordPage() {
  let histories: History[] = [];
  try {
    histories = await getAllHistories();
  } catch (e) {
    console.log(e);
  }
  return (
    <div>
      <NavBar />
      <DashBoardCollection histories={histories} />
    </div>
  );
}
