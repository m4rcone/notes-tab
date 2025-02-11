export default function EmptyState({ message }: { message: string }) {
  return (
    <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-sm text-neutral-950">
      {message}
    </p>
  );
}
