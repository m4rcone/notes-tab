import Header from "../ui/header";
import MenuBar from "../ui/menu-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="mb-14 flex-1">{children}</main>
      <MenuBar />
    </div>
  );
}
