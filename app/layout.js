import Navbar from "./components/Navbar";
import "./globals.css";
import { Karla } from "next/font/google";

const karla = Karla({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
