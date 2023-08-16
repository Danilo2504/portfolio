import "./globals.css";
import { Rubik, Poppins } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Danilo Bautista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${poppins.variable} h-screen bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
