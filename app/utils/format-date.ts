export function formatDate(prop: string) {
  const date = new Date(prop);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}
