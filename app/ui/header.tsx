import Image from "next/image";

export default function Header() {
  return (
    <header className="h-14 bg-neutral-100 px-4 py-3">
      <Image
        src="/assets/images/logo.svg"
        width={95}
        height={28}
        alt="Logo Notes Tab"
      />
    </header>
  );
}
