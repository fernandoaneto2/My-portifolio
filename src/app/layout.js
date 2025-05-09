import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "./Components/navbar/navbar.tsx";
import Rodape from "./Components/rodape/rodape";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fernando Amorim",
  description: "Aqui você irá saber um pouco sobre mim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <NavBar />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
