import "./globals.css";
import { Geist } from "next/font/google";
import localFont from "next/font/local";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const sfMono = localFont({
  src: [
    {
      path: "../fonts/sf-mono/SFMonoRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfmono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${sfMono.variable}`}>
        {children}
      </body>
    </html>
  );
}