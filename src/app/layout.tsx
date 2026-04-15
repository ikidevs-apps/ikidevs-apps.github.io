import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "ikidevs — We build apps",
  description:
    "ikidevs is a two-person dev studio. Our first app, CLIMB, turns studying into a mountain adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunito.variable} font-nunito antialiased`}>
        {children}
      </body>
    </html>
  );
}
