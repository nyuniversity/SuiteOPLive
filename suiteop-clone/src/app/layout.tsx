import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./home.css";
import ClientBody from "./ClientBody";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "SuiteOp | Unlock the Future of Hospitality",
  description: "SuiteOp's integrated solutions brings automations to your short-term rental or hotel operation, deliver unparalleled guest experiences at scale.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
