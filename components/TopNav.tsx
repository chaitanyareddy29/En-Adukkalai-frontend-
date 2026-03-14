"use client";

import { useCart } from "@/context/CartContext";
import { Info, Menu, ShoppingCart, Store, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type StoredUser = {
  id: number;
  username: string;
  email: string;
};

export default function TopNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const [user, setUser] = useState<StoredUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `flex items-center gap-2 transition-colors hover:text-[#3e5219] ${
      pathname === href ? "text-[#3e5219] font-semibold" : "text-[#45483c]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#c5c8b8]/20 bg-[rgba(252,249,239,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#1c1c16] transition-colors hover:bg-[#ebe8de] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="/"
            className="font-headline text-lg font-semibold tracking-tight text-[#3e5219] sm:text-2xl"
          >
            En Adukkalai
          </Link>
        </div>

        <nav className="hidden items-center gap-4 lg:gap-8 md:flex">
          <Link href="/collection" className={linkClass("/collection")}>
            <Store className="h-5 w-5" />
            <span>Shop</span>
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            <Info className="h-5 w-5" />
            <span>About Us</span>
          </Link>

          {user ? (
            <Link href="/account" className={linkClass("/account")}>
              <User className="h-5 w-5" />
              <span>Account</span>
            </Link>
          ) : (
            <Link href="/login" className={linkClass("/login")}>
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">

          {/* MOBILE ACCOUNT ICON */}
          {user ? (
            <Link
              href="/account"
              className="rounded-full p-2 text-[#1c1c16] transition hover:bg-[#ebe8de] md:hidden"
            >
              <User className="h-5 w-5" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full p-2 text-[#1c1c16] transition hover:bg-[#ebe8de] md:hidden"
            >
              <User className="h-5 w-5" />
            </Link>
          )}

          <Link
            href="/cart"
            className="relative flex items-center justify-center rounded-full p-2 text-[#1c1c16] transition-colors hover:bg-[#ebe8de]"
          >
            <ShoppingCart className="h-5 w-5" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#924c00] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#c5c8b8]/20 bg-[#fcf9ef] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/collection" className={linkClass("/collection")}>
              <Store className="h-5 w-5" />
              <span>Shop</span>
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              <Info className="h-5 w-5" />
              <span>About Us</span>
            </Link>

            {user ? (
              <Link href="/account" className={linkClass("/account")}>
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
            ) : (
              <Link href="/login" className={linkClass("/login")}>
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}