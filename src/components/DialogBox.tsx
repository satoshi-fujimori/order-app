import React from "react";

import { Button, Dialog, DialogPanel } from "@tremor/react";

type Props = {
  isopen: boolean;
  buttonMessage?: string;
  message: string;
  handleOpen: Function;
  func: Function;
};

export default function DialogBox({
  buttonMessage,
  func,
  message,
  handleOpen,
  isopen,
}: Props) {
  return (
    <div className="flex justify-center">
      <Dialog
        open={isopen}
        onClose={() => handleOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-sm w-fit flex flex-col gap-2">
          <p>{message}</p>
          {buttonMessage && (
            <Button
              variant="light"
              className="mx-auto flex items-center"
              onClick={() => func()}
            >
              {buttonMessage}
            </Button>
          )}

          <Button
            variant="light"
            className="mx-auto flex items-center"
            onClick={() => handleOpen(false)}
          >
            やめる
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
