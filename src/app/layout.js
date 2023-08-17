import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Rubik, Poppins } from "next/font/google";

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
        <link rel="icon" href="/icon2.png" />
      </head>
      <body
        className={`${rubik.variable} ${poppins.variable} h-screen bg-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
