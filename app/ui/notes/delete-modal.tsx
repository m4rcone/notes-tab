import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./button";

export default function DeleteModal({ isOpen, setIsOpen }) {
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
                  viewBox="0 0 24 25"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <DialogTitle className="text-base font-semibold text-neutral-950">
                  Delete Note
                </DialogTitle>
                <Description className="text-sm text-neutral-700">
                  Are you sure you want to permanently delete this note? This
                  action cannot be undone.
                </Description>
              </div>
            </div>
            <div className="border-b border-b-neutral-200 pt-5"></div>
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Delete Note
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
