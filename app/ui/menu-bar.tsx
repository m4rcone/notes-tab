import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/notes", icon: "icon-home.svg" },
  { name: "Search", href: "/notes?filter=search", icon: "icon-search.svg" },
  {
    name: "Archived",
    href: "/notes?filter=archived",
    icon: "icon-archive.svg",
  },
  { name: "Tags", href: "", icon: "icon-tag.svg" },
  { name: "Settings", href: "", icon: "icon-settings.svg" },
];

export default function MenuBar() {
  return (
    <nav className="fixed bottom-0 left-0 flex h-14 w-full justify-between border-t border-t-neutral-300 bg-white px-4 py-3">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="rounded-sm px-5 py-1">
          <Image
            src={`../assets/images/${link.icon}`}
            width={24}
            height={24}
            alt={`Icon ${link.name}`}
          />
        </Link>
      ))}
    </nav>
  );
}
