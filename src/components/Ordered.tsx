"use client";

import type { Item } from "@/types";
import { IcRoundArrowForwardIos } from "./Icons/IcRoundArrowForwardIos";
import { useModal } from "@/providers/ModalProvider";
import OrderDetails from "./OrderDetails";
import { postOrder } from "@/libs/actions";
import DialogBox from "./DialogBox";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Ordered({
  itemList,
  handleList,
  initialList,
}: {
  itemList: Item[];
  handleList: Function;
  initialList: Item[];
}) {
  let totalAmount: number = 0;
  let totalePrice: number = 0;
  for (let item of itemList) {
    totalAmount += item.amount;
    totalePrice += item.amount * item.unitPrice;
  }

  const { openModal, closeModal } = useModal();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="flex justify-between items-center fixed left-0 bottom-0 p-2 bg-tremor-brand-subtle w-screen shadow-lg min-h-20">
      <div>
        <p className="text-white flex items-center gap-x-2">
          ちゅうもんしたかず　{totalAmount}
          <button
            onClick={() =>
              totalAmount !== 0 &&
              openModal(<OrderDetails itemList={itemList} />)
            }
          >
            <IcRoundArrowForwardIos />
          </button>
        </p>
        <p className="text-white">りょうきん　￥{totalePrice}</p>
      </div>
      <div>
        <button
          className="bg-white p-2 rounded-lg mx-4 "
          onClick={() =>
            openModal(
              <div>
                <OrderDetails itemList={itemList} />
                <button
                  className="bg-white p-2 rounded-lg mx-4 w-auto"
                  onClick={() => {
                    setIsDialogOpen(true);
                  }}
                >
                  おしはらい
                </button>
              </div>
            )
          }
        >
          ちゅうもん
        </button>
      </div>
      {isDialogOpen && (
        <DialogBox
          buttonMessage="おっけい"
          message="ちゅうもんしますか？"
          handleOpen={setIsDialogOpen}
          isopen={isDialogOpen}
          func={() => {
            postOrder(itemList);
            handleList(initialList);
            setIsDialogOpen(false);
            console.log("処理終了");
          }}
        />
      )}
    </div>
  );
}
