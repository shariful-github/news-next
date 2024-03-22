import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Next",
  description: "An authentic news site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <NavBar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
