"use client";

import ListNotes from "../ui/notes/list-notes";
import { useSearchParams } from "next/navigation";
import SearchInput from "../ui/notes/search-input";
import ListTags from "../ui/notes/list-tags";

export default function Page() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const tag = searchParams.get("tag");

  return (
    <section className="flex flex-col gap-4 px-4 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-neutral-950">
          {searchParams ? (
            filter === "archived" ? (
              "Alchived Notes"
            ) : filter === "search" ? (
              "Search"
            ) : filter === "tags" && !tag ? (
              "Tags"
            ) : tag ? (
              <>
                <span className="text-neutral-600">Notes Tagged: </span>
                {tag}
              </>
            ) : (
              "All notes"
            )
          ) : (
            "All notes"
          )}
        </h2>
        {filter === "archived" && (
          <p className="text-sm text-neutral-700">
            All your archived notes are stored here. You can restore or delete
            them anytime.
          </p>
        )}
        {tag && (
          <p className="text-sm text-neutral-700">
            All notes with{" "}
            {searchParams.get("tag") &&
              `"${searchParams.get("tag").toString()}"`}{" "}
            tag are shown here.
          </p>
        )}
        {filter === "search" && <SearchInput />}
      </div>
      {filter === "tags" && !tag ? <ListTags /> : <ListNotes />}
    </section>
  );
}
