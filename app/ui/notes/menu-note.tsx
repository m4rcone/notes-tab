"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { showSuccessToast } from "../../lib/toast";
import data from "../../lib/data.json";
import ArchiveIcon from "../../../public/assets/images/icon-archive.svg";
import DeleteIcon from "../../../public/assets/images/icon-delete.svg";
import RestoreIcon from "../../../public/assets/images/icon-restore.svg";
import Modal from "./modal";

export default function MenuNote() {
  const [isOpenDeleteModel, setIsOpenDeleteModel] = useState<boolean>(false);
  const [isOpenArchiveModel, setIsOpenArchiveModel] = useState<boolean>(false);
  const [isOpenRestoreModel, setIsOpenRestoreModel] = useState<boolean>(false);

  const router = useRouter();

  const params = useParams();
  const note = data.notes.find((note) => note.id === params.slug);

  return (
    <nav className="flex justify-between border-b border-b-neutral-300 pb-3 text-sm text-neutral-600">
      <span
        className="flex cursor-pointer items-center gap-1"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z"
            clipRule="evenodd"
          />
        </svg>
        Go back
      </span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpenDeleteModel(true)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
        </button>
        {note?.isArchived ? (
          <button
            onClick={() => setIsOpenRestoreModel(true)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.708 7.404a.75.75 0 0 1 .983.398l1.316 3.114L9.1 9.608a.75.75 0 0 1 .584 1.382L5.9 12.59a.75.75 0 0 1-.983-.4L3.309 8.387a.75.75 0 0 1 .4-.982Z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622a7.838 7.838 0 0 1 7.835 7.835 7.833 7.833 0 0 1-7.835 7.835 7.843 7.843 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.343 6.343 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.339 6.339 0 0 0-6.335-6.335Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => setIsOpenArchiveModel(true)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          </button>
        )}
        <button className="cursor-pointer" onClick={() => router.back()}>
          Cancel
        </button>
        <Modal
          isOpen={isOpenArchiveModel}
          setIsOpen={setIsOpenArchiveModel}
          type="Archive"
          description="Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime."
          Icon={ArchiveIcon}
        />
        <Modal
          isOpen={isOpenDeleteModel}
          setIsOpen={setIsOpenDeleteModel}
          type="Delete"
          description="Are you sure you want to permanently delete this note? This action cannot be undone."
          Icon={DeleteIcon}
        />
        <Modal
          isOpen={isOpenRestoreModel}
          setIsOpen={setIsOpenRestoreModel}
          type="Restore"
          description="Are you sure you want to restore this note?"
          Icon={RestoreIcon}
        />
        <button
          className="cursor-pointer text-blue-500"
          onClick={() => showSuccessToast("Note updated.")}
        >
          Save Note
        </button>
        <ToastContainer />
      </div>
    </nav>
  );
}
