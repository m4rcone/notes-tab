"use client";

import ListNotes from "../ui/notes/list-notes";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  return (
    <section className="flex flex-col gap-4 px-4 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-neutral-950">
          {searchParams
            ? searchParams.get("filter") === "archived"
              ? "Alchived Notes"
              : "All notes"
            : "All notes"}
        </h2>
        {filter === "archived" && (
          <p className="text-sm text-neutral-700">
            All your archived notes are stored here. You can restore or delete
            them anytime.
          </p>
        )}
      </div>
      <ListNotes />
    </section>
  );
}
