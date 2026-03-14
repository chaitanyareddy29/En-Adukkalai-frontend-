import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "En Adukkalai",
  description: "Natural, sustainable kitchen essentials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <TopNav />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}