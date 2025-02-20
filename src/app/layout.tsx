import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>BMCCI</title>
        </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
