import ListNotes from "./ui/list-notes";

export default function Page() {
  return (
    <section className="flex flex-col gap-4 px-4 py-5">
      <h2 className="text-2xl font-bold text-neutral-950">All notes</h2>
      <ListNotes />
    </section>
  );
}
