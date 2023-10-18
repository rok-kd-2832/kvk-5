import Sidebar from "@/components/Sidebar";
import "./globals.css";
import "./common.css";
import type { Metadata } from "next";
import RecoilProvider from "./Provider";

export const metadata: Metadata = {
  title: "Rok Helper",
  description: "An open source ROK Helper Product",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <RecoilProvider>{children}</RecoilProvider>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
