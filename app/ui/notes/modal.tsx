import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./button";
import { showSuccessToast } from "../../lib/toast";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  type: "Delete" | "Archive" | "Restore";
  description: string;
  Icon: any;
}

export default function Modal({
  isOpen,
  setIsOpen,
  type,
  description,
  Icon,
}: ModalProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-neutral-950 opacity-50"></div>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-md rounded-xl bg-white p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-neutral-100 p-2">
                <Icon />
              </div>
              <div className="flex flex-col gap-1.5">
                <DialogTitle className="text-base font-semibold text-neutral-950">
                  {type} Note
                </DialogTitle>
                <Description className="text-sm text-neutral-700">
                  {description}
                </Description>
              </div>
            </div>
            <div className="border-b border-b-neutral-200 pt-5"></div>
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                variant={type === "Delete" ? "danger" : "primary"}
                onClick={() => {
                  setIsOpen(false);
                  type === "Delete" && showSuccessToast("Note deleted.");
                  type === "Archive" && showSuccessToast("Note archived.");
                  type === "Restore" && showSuccessToast("Note restored.");
                }}
              >
                {type} Note
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
