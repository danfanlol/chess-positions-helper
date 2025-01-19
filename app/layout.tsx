import type { Metadata } from "next";
import './globals.css';



export const metadata: Metadata = {
  title: "Knight's tour",
  description: "Generated by Daniel Fan :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
