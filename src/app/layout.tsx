import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./providers/queryProvider";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Tablecrm test project",
  description: "Tablecrm test project by gmtdn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
    >
      <body>
        <QueryProvider>
          {children}
          <Toaster richColors position="top-right"/>
        </QueryProvider>
      </body>
    </html>
  );
}
