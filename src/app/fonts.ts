import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "400", "500"],
  display: "swap"
});