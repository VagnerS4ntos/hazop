import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";

export const metadata: Metadata = {
  title: "Recomendações HAZOP",
  description: "App para acompanhar as recomendações do HAZOP da P-83",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
