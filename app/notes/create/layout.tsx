import MenuNote from "../../ui/notes/menu-note";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 px-4 py-5">
      <MenuNote />
      {children}
    </section>
  );
}
