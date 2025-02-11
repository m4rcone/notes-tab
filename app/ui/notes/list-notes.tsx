import Link from "next/link";
import data from "../../lib/data.json";
import { formatDate } from "../../utils/format-date";
import { useSearchParams } from "next/navigation";

export default function ListNotes() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const query = searchParams.get("query");
  const tagTagged = searchParams.get("tag");

  let filteredNotes = data.notes;

  if (filter === "archived") {
    filteredNotes = filteredNotes.filter((note) => note.isArchived);
  }

  if (filter == "search" && query) {
    filteredNotes = filteredNotes.filter((note) => {
      return (
        note.content.toLowerCase().includes(query.toLowerCase()) ||
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      );
    });
  }

  if (tagTagged) {
    filteredNotes = filteredNotes.filter((note) =>
      note.tags.some((tag) =>
        tag.toLowerCase().includes(tagTagged.toLowerCase()),
      ),
    );
  }

  return (
    <ul className="flex flex-col gap-1">
      {filteredNotes.map((note) => {
        const formattedDate = formatDate(note.lastEdited);
        return (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <li className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-neutral-950">
                {note.title}
              </h2>
              <ul className="flex gap-1">
                {note.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline rounded-sm bg-neutral-200 px-1.5 py-0.5 text-xs text-neutral-950"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral-700">{formattedDate}</p>
              <div className="border-b border-neutral-200"></div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
