import { LocaleProvider } from "./Contexts/LocaleContext";
import { Rubik, Poppins } from "next/font/google";
import SideBars from "./Components/SideBars";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./globals.css";

const rubik = Rubik({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const poppins = Poppins({
  weight: ["200", "300", "400"],
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
        <link rel="icon" href="/favicon2.png" />
      </head>
      <body
        className={`${rubik.variable} ${poppins.variable} h-screen bg-primary`}
      >
        <LocaleProvider>
          <Navbar />
          <SideBars />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
