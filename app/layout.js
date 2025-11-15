"use client";
import BootstrapClient from "@/utils/BootstrapClient";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import FirstTimeDataLoader from "@/utils/FirstTimeDataLoader";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Do not show Navbar on login page
  const showNavbar = pathname !== "/login";
  return (
    <html>
      <body>
        {showNavbar && <Navbar />}
        {children}
        {showNavbar && <Footer />}
        <FirstTimeDataLoader />
        <BootstrapClient />
      </body>
    </html>
  );
}
