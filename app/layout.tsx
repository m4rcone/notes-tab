import { inter } from "./ui/fonts";
import "./ui/global.css";
import Header from "./ui/header";
import MenuBar from "./ui/menu-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-full flex-col antialiased`}
      >
        <Header />
        <main className="mb-14 flex-1">{children}</main>
        <MenuBar />
      </body>
    </html>
  );
}
