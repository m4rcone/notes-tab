"use client";

import { useParams } from "next/navigation";
import data from "../../lib/data.json";
import { formatDate } from "../../utils/format-date";
import { useEffect, useRef } from "react";

export default function Page() {
  const params = useParams();
  const textareaTitleRef = useRef(null);
  const textareaContentRef = useRef(null);
  const textareaTagsRef = useRef(null);

  useEffect(() => {
    if (
      textareaTitleRef.current &&
      textareaContentRef.current &&
      textareaTagsRef.current
    ) {
      textareaTitleRef.current.style.height = "auto";
      textareaTitleRef.current.style.height = `${textareaTitleRef.current.scrollHeight}px`;
      textareaTitleRef.current.style.resize = "none";
      textareaContentRef.current.style.height = "auto";
      textareaContentRef.current.style.height = `${textareaContentRef.current.scrollHeight}px`;
      textareaContentRef.current.style.resize = "none";
      textareaTagsRef.current.style.height = "auto";
      textareaTagsRef.current.style.height = `${textareaTagsRef.current.scrollHeight}px`;
      textareaTagsRef.current.style.resize = "none";
    }
  }, []);

  const handleInputTags = (e: React.FormEvent<HTMLTextAreaElement>) => {
    let value = e.currentTarget.value;

    // Permite apenas letras (maiúsculas e minúsculas) e vírgulas
    value = value.replace(/[^a-zA-Z,]/g, "");

    // Adiciona um espaço após cada vírgula, se não houver um já
    value = value.replace(/,([^ ])/g, ", $1");

    e.currentTarget.value = value;
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col gap-3">
      <textarea
        ref={textareaTitleRef}
        rows={1}
        maxLength={50}
        placeholder="Enter a title…"
        onChange={(e) => {
          e.currentTarget.style.height = "auto"; // Reseta a altura para evitar acúmulo
          e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // Ajusta a altura conforme o conteúdo
        }}
        className="overflow-hidden text-2xl font-bold text-neutral-950 placeholder:text-2xl placeholder:font-bold placeholder:text-neutral-950"
      ></textarea>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 py-1">
          <span className="flex min-w-[115px] items-center gap-1.5 text-xs text-neutral-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                clipRule="evenodd"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                clipRule="evenodd"
              />
            </svg>
            Tags
          </span>
          <textarea
            ref={textareaTagsRef}
            rows={1}
            maxLength={30}
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
            onChange={(e) => handleInputTags(e)}
            className="w-full overflow-hidden text-xs text-neutral-950 placeholder:text-neutral-400"
          ></textarea>
        </div>

        <div className="flex items-center gap-2 py-1">
          <span className="flex min-w-[115px] items-center gap-1.5 text-xs text-neutral-700">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z"
                fill="currentColor"
              />
            </svg>
            Last Edited
          </span>
          <span className="text-xs text-neutral-400">Not yet saved</span>
        </div>
      </div>
      <div className="border-b border-b-neutral-200"></div>
      <textarea
        ref={textareaContentRef}
        placeholder="Start typing your note here…"
        onChange={(e) => {
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
        }}
        className="overflow-hidden text-sm text-neutral-800 placeholder:text-xs placeholder:text-neutral-800"
      ></textarea>
    </div>
  );
}
