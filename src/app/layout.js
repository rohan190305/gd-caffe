import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "JD's Cafe",
  description: "JD's cafe - A cozy corner for coffee and conversation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
