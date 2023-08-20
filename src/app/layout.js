import { Rubik, Poppins } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./globals.css";
import SideBars from "./Components/SideBars";

const rubik = Rubik({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const poppins = Poppins({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Danilo Bautista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${rubik.variable} ${poppins.variable} h-screen bg-primary`}
      >
        <Navbar />
        <SideBars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
