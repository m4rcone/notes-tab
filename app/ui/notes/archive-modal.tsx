import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./button";
import { showSuccessToast } from "../../lib/toast";

export default function ArchiveModal({ isOpen, setIsOpen }) {
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <DialogTitle className="text-base font-semibold text-neutral-950">
                  Archive Note
                </DialogTitle>
                <Description className="text-sm text-neutral-700">
                  Are you sure you want to archive this note? You can find it in
                  the Archived Notes section and restore it anytime.
                </Description>
              </div>
            </div>
            <div className="border-b border-b-neutral-200 pt-5"></div>
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  showSuccessToast("Note archived.");
                  setIsOpen(false);
                }}
              >
                Archive Note
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
