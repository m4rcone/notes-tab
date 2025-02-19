import Link from "next/link";
import data from "../../lib/data.json";
import EmptyState from "./empty-state";
import { Fragment } from "react";

export default function ListTags() {
  const tags = getUniqueSortedTags();

  function getUniqueSortedTags() {
    const allTags = data.notes
      ?.filter((note) => !note.isArchived)
      .flatMap((note) => note.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return uniqueTags.sort();
  }

  if (tags.length !== 0) {
    return (
      <ul className="flex flex-col gap-1">
        {tags.map((tag, index) => (
          <Fragment key={index}>
            <Link
              href={`/notes?filter=tags&tag=${tag}`}
              className="rounded-lg hover:bg-neutral-100"
            >
              <li className="flex items-center gap-2 py-2.5 text-sm font-medium text-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                    stroke="#currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{tag}</p>
              </li>
            </Link>
            <div className="border-b border-neutral-200"></div>
          </Fragment>
        ))}
      </ul>
    );
  } else {
    return (
      <EmptyState message="You don't have any tags yet. Start a new note to capture your thoughts and ideas." />
    );
  }
}
