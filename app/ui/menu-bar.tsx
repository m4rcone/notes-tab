"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import HomeIcon from "../../public/assets/images/icon-home.svg";
import SearchIcon from "../../public/assets/images/icon-search.svg";
import ArchiveIcon from "../../public/assets/images/icon-archive.svg";
import TagIcon from "../../public/assets/images/icon-tag.svg";
import SettingsIcon from "../../public/assets/images/icon-settings.svg";

const links = [
  { name: "Home", href: "/notes", icon: HomeIcon },
  { name: "Search", href: "/notes?filter=search", icon: SearchIcon },
  {
    name: "Archived",
    href: "/notes?filter=archived",
    icon: ArchiveIcon,
  },
  { name: "Tags", href: "/notes?filter=tags", icon: TagIcon },
  { name: "Settings", href: "/notes/settings", icon: SettingsIcon },
];

export default function MenuBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();
  const filter = searchParams.get("filter");
  const { replace } = useRouter();

  return (
    <div className="relative">
      <nav className="fixed bottom-0 left-0 flex h-14 w-full justify-between border-t border-t-neutral-300 bg-white px-4 py-3">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive =
            (pathname === link.href && !filter) ||
            (filter && link.href.includes(`filter=${filter}`));

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("rounded-sm px-5 py-1", {
                "bg-blue-50": isActive,
                "text-blue-500": isActive,
                "text-neutral-600": !isActive,
              })}
            >
              <LinkIcon />
            </Link>
          );
        })}
      </nav>

      {pathname !== "/notes/settings" && !params.slug && (
        <button
          onClick={() => replace("/notes/create")}
          className="fixed right-4 bottom-[76px] rounded-full bg-blue-500 p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
