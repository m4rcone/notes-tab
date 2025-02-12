import clsx from "clsx";

export default function Button({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx("cursor-pointer rounded-lg px-4 py-3 text-sm", {
        "bg-blue-500 text-white": variant === "primary",
        "bg-neutral-100 text-neutral-600": variant === "secondary",
        "bg-red-500 text-white": variant === "danger",
      })}
    >
      {children}
    </button>
  );
}
