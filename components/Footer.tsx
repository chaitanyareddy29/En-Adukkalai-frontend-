import { Instagram, Leaf, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#c5c8b8]/20 bg-[#fcf9ef] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-[#3e5219]" />
            <span className="font-headline text-xl text-[#3e5219] font-semibold">
              En Adukkalai
            </span>
          </div>

          <p className="text-sm text-[#45483c] leading-relaxed max-w-xs">
            Natural kitchen essentials crafted with sustainability and
            tradition in mind. Bringing conscious living into modern homes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-headline text-lg mb-4 text-[#1c1c16]">
            Explore
          </h4>

          <ul className="space-y-3 text-sm text-[#45483c]">
            <li>
              <Link href="/collection" className="hover:text-[#3e5219]">
                Shop
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-[#3e5219]">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/account" className="hover:text-[#3e5219]">
                Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-headline text-lg mb-4 text-[#1c1c16]">
            Connect
          </h4>

          <div className="flex items-center gap-4 text-[#45483c]">

            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#3e5219]"
            >
              <Instagram size={18} />
              Instagram
            </a>

          </div>

          <div className="flex items-center gap-2 mt-3 text-[#45483c] hover:text-[#3e5219]">
            <Mail size={18} />
            hello@enadukkalai.com
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c5c8b8]/20 text-center py-6 text-xs text-[#45483c]">
        © {new Date().getFullYear()} En Adukkalai. Sustainable Kitchen Living.
      </div>
    </footer>
  );
}