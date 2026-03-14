import ProductActions from "@/components/ProductActions";
import {
  ArrowRight,
  BadgeCheck,
  Hand,
  Leaf,
  Sparkles,
  Thermometer,
  Users
} from "lucide-react";

export const metadata = {
  title: "Bamboo Water Bottle | En Adukkalai",
  description:
    "Insulated stainless steel core with a single-piece bamboo exterior shell. Sleek and sustainable design.",
};

export default function BambooWaterBottlePage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <div className="group aspect-[4/5] overflow-hidden rounded-xl bg-[#f7f4e9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdBPA_W-RwjDEG5CNpI8y2DGdCFvzvWrLdk400fli_f7xXG8j5vV77pusKANeHNO2p1Ae4yzDSAiRmmt4zBW1rzoRSTZzuUIXhObTZ3VegxBjnNBExA6tuynj4b6y4LcA6kDdGKn2uTW9XmLgWZhsNCUlxPOawCvszuPndgXDiMH6NGHI0-5bjdSEFWlWs4rXG4gR5REcVKS5LKGWf9Lbx0HTiBH8kaio1KYBK6RJCSScbOTy9R2D6cnIOB-XxXjUuVIDV7niO9B0"
                alt="Bamboo Water Bottle"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 flex flex-col gap-2">
                <span className="rounded-sm bg-[#74613c] px-3 py-1 text-xs tracking-wide text-[#f7deaf]">
                  Plastic Free
                </span>
                <span className="rounded-sm bg-[#74613c] px-3 py-1 text-xs tracking-wide text-[#f7deaf]">
                  Sourced in India
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-4 lg:col-span-5">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-[#3e5219]">
                Handcrafted Essentials
              </p>
              <h1 className="font-headline text-5xl leading-tight text-[#1c1c16] lg:text-6xl">
                Bamboo Water Bottle
              </h1>
              <p className="mt-4 font-headline text-2xl text-[#924c00]">
                ₹899
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-[#45483c]">
                Insulated stainless steel core with a single-piece bamboo
                exterior shell. Keeps drinks cold or hot for hours. Sleek and
                sustainable design.
              </p>

              <div className="flex flex-col gap-4 border-y border-[#c5c8b8]/20 py-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ebe8de]">
                    <Thermometer className="h-5 w-5 text-[#3e5219]" />
                  </div>
                  <span className="text-[#1c1c16]">
                    12h Hot / 24h Cold Insulation
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ebe8de]">
                    <Leaf className="h-5 w-5 text-[#3e5219]" />
                  </div>
                  <span className="text-[#1c1c16]">
                    100% Biodegradable Exterior
                  </span>
                </div>
              </div>

              <ProductActions
              product={{
                id: "bottle",
                name: "Bamboo Water Bottle",
                price: 899,
              }}
            />
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-20">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="font-headline text-4xl text-[#1c1c16]">
              The Organic Curator&apos;s Promise
            </h2>
            <div className="mx-auto h-1 w-12 bg-[#924c00]" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-8 rounded-xl bg-[#f7f4e9] p-8 md:col-span-2 lg:flex-row lg:p-12">
              <div className="flex-1 space-y-4">
                <h3 className="font-headline text-3xl text-[#1c1c16]">
                  Bamboo Craftsmanship
                </h3>
                <p className="leading-relaxed text-[#45483c]">
                  Each bottle is encased in a single, seamless piece of
                  sustainably harvested bamboo. Hand-polished to reveal the
                  unique grain of the wood, ensuring that no two bottles are
                  ever identical.
                </p>
                <button className="mt-4 flex items-center gap-2 text-sm text-[#3e5219]">
                  Learn about our process
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="aspect-square flex-1 overflow-hidden rounded-lg bg-[#dddad0]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRv2dtgRlmqf_dORNZZEcP-HNFL927VVFKXo4t67KgfYEEXQnWYMF_zyH45YjiOhtyjTSfCMMO8GXCWKLZcXlnj8Wpxg6Cidm5-YXfdS69y9ojusrsUJjHKj8BAQxKrzhdZrl4OugBWxj0ntFxMPrTEg_zJWsVGOjBHea7Io5Rky6L06Q7yHWtyLK_wlG7ZIxjfScrP9571bFP1DC8-HpB5FGkkY1CgpWV0pt6g65xhHkbRJSD9pTwpQBKArmNOET9VhHFX4x5HQU"
                  alt="Bamboo detail"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl bg-[#556b2f] p-8 text-[#d0eba1] lg:p-12">
              <div className="space-y-4">
                <Users className="h-10 w-10" />
                <h3 className="font-headline text-3xl">Sustainability</h3>
                <p className="opacity-90">
                  By choosing bamboo, you reduce plastic waste and support
                  regenerative agriculture.
                </p>
              </div>

              <div className="pt-8">
                <div className="font-headline text-5xl">0%</div>
                <div className="mt-1 text-sm uppercase tracking-widest opacity-80">
                  Plastic Used
                </div>
              </div>
            </div>

            <div className="group flex items-center justify-between rounded-xl bg-[#e5e2d9] p-8">
              <div>
                <h4 className="font-headline text-xl text-[#1c1c16]">
                  Leak-proof Lid
                </h4>
                <p className="mt-1 text-sm text-[#45483c]">
                  Stainless steel top with silicone seal.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#75796b]/20 transition-all group-hover:bg-[#3e5219] group-hover:text-white">
                <BadgeCheck className="h-5 w-5" />
              </div>
            </div>

            <div className="group flex items-center justify-between rounded-xl bg-[#e5e2d9] p-8">
              <div>
                <h4 className="font-headline text-xl text-[#1c1c16]">
                  Wide Mouth
                </h4>
                <p className="mt-1 text-sm text-[#45483c]">
                  Easy to clean and fits ice cubes.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#75796b]/20 transition-all group-hover:bg-[#3e5219] group-hover:text-white">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="group flex items-center justify-between rounded-xl bg-[#e5e2d9] p-8">
              <div>
                <h4 className="font-headline text-xl text-[#1c1c16]">
                  Ergonomic
                </h4>
                <p className="mt-1 text-sm text-[#45483c]">
                  Lightweight and fits car cup holders.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#75796b]/20 transition-all group-hover:bg-[#3e5219] group-hover:text-white">
                <Hand className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16 mt-32 text-center">
          <blockquote className="mx-auto max-w-3xl">
            <p className="font-headline text-3xl italic leading-relaxed text-[#1c1c16] lg:text-4xl">
              &quot;A vessel that honors the ritual of hydration while
              respecting the rhythm of the earth.&quot;
            </p>
            <footer className="mt-6 text-sm uppercase tracking-widest text-[#924c00]">
              — The Curator&apos;s Note
            </footer>
          </blockquote>
        </section>
      </main>

      <div className="h-24" />
    </>
  );
}