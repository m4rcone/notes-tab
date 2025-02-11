"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative mt-2">
        <svg
          className="absolute top-3 left-4"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#737373"
            fillRule="evenodd"
            d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
            clipRule="evenodd"
          />
          <path
            fill="#737373"
            fillRule="evenodd"
            d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by title, content, or tags…"
          defaultValue={searchParams.get("search")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 py-3 pr-4 pl-11 text-sm text-neutral-950 placeholder:text-sm placeholder:text-neutral-500"
        />
      </div>
      <p className="text-sm text-neutral-700">
        All notes matching{" "}
        {searchParams.get("query") &&
          `"${searchParams.get("query").toString()}"`}{" "}
        are displayed below.
      </p>
    </div>
  );
}
