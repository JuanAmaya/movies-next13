import "./globals.css";
import { Montserrat, MuseoModerno } from "@next/font/google";

// const montserrat = Montserrat({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

const museoModerno = MuseoModerno({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-museoModerno",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${museoModerno.className}`}>{children}</body>
    </html>
  );
}
