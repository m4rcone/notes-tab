import data from "../lib/data.json";

export default function ListNotes() {
  return (
    <ul className="flex flex-col gap-1">
      {data.notes.map((note) => (
        <li key={note.id} className="flex flex-col gap-3">
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
          <p className="text-xs text-neutral-700">{note.lastEdited}</p>
          <div className="border-b border-neutral-200"></div>
        </li>
      ))}
    </ul>
  );
}
