import { Abhaya } from "@/fonts";
import "./globals.css";

export const metadata = {
  title: "Mallalo X",
  description: "Created by GrupoStart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full flex justify-center items-center bg-[url('/GlobalBG.jpg')]">
      <body className={`${Abhaya.className} max-w-screen-xs`}>{children}</body>
    </html>
  );
}
