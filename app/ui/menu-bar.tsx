"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
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
  { name: "Settings", href: "/notes/config", icon: SettingsIcon },
];

export default function MenuBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const filter = searchParams.get("filter");

  return (
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
            })}
          >
            <LinkIcon />
          </Link>
        );
      })}
    </nav>
  );
}
