import ProductActions from "@/components/ProductActions";
import {
  Leaf,
  Minus,
  Package,
  Plus,
  Recycle,
  ShieldCheck,
  Sparkles,
  Trees,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "Coconut Coir Scrub | En Adukkalai",
  description:
    "Durable, eco-friendly scrubbers made from natural coconut husk for gentle yet effective cleaning.",
};

export default function ProductPage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="grid grid-cols-12 gap-4 lg:col-span-7">
            <div className="relative col-span-12 aspect-[4/5] overflow-hidden rounded-xl bg-[#f7f4e9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLIX_q2kNZtQ2gQ2CqTiOPjAGA4oS6_1QJ124Zc9aLOufBO95zzTAH9JwC7Tg_G7fK3fpzUpWYGYM8s11kBtFe40VHNibAOArYUW2tGDleYD-tgwM8LAtw1mbMcNQ7CfbP6i3lCOPigFjg52u-2WBDX56czfrDAPH-4jN-5skaMOgrhlk2-_F7UZI0YZoa3lJOJm5Z_o4kSUfljtB6sRdi_DooyLYthmPFQ9E5RLX7vwS4UPLYtCUTXPXjxbkPRDLGrmJ7qWBMYyc"
                alt="Natural coconut coir scrubber close up texture"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 flex gap-2">
                <span className="rounded-full bg-[#74613c] px-3 py-1 text-xs uppercase tracking-wider text-[#f7deaf]">
                  Plastic-Free
                </span>
                <span className="rounded-full bg-[#556b2f] px-3 py-1 text-xs uppercase tracking-wider text-[#d0eba1]">
                  100% Organic
                </span>
              </div>
            </div>

            <div className="col-span-4 aspect-square overflow-hidden rounded-lg bg-[#f1eee4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACYDSE2zlBIxuFkvLMjkTVeuK7kGiZmEMhZ-Pa6gAoue-ct6wWyuC7aJHVS67154CDRwFs990lRy05Ug-rv8XhBFi8GqIyy6w9a0TADJVEOYtbkSzWQi10qgMRmp0Zoa5op_JEWeGpv7llkJKbtmLoGRp-tSgzyPFcPFkSdU0U-Lp5Cx3fvvmj6jstngSVyPD9XJLGXYnix5zRLtVtyPCyML9vnbBnW2a2ET8aiA7JcDFCHrOb3aRNNrRV-fhdHX2JExTxuuqh1Es"
                alt="Eco friendly kitchen cleaning set"
                className="h-full w-full object-cover opacity-80"
              />
            </div>

            <div className="col-span-4 aspect-square overflow-hidden rounded-lg bg-[#f1eee4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ziYaOg8SUrDwr4xNcWzs2V8ksTNi0OW8uJjClObEvvEwk8R6op991Pi2D7N4Yfxhv6J2BWRcGX41bfEozAL6hvOTNey_g7wc25TmRRxzFLNEQqWMC19AlH7ROxiG1mE7Fb24dKS2jcXXyaIj6cg73XcsxskMPiLOo-iSX8T_CT4IdUO-ROpu2yTEzP--viDLPkMPj9QIlopGmh9ivIKggMFXlMhorRW6AmVIC_rS27rhI-aBmmM3J147AWwqjEbthwIy3rYJR-0"
                alt="Coconut husk raw material"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <div>
              <nav className="mb-4 flex gap-2 text-sm text-[#75796b]">
                <span>Shop</span>
                <span>/</span>
                <span>Kitchen Essentials</span>
              </nav>

              <h1 className="mb-4 font-headline text-5xl leading-tight text-[#1c1c16] lg:text-6xl">
                Coconut Coir Scrub
              </h1>

              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-medium text-[#924c00]">₹149</span>
                <span className="text-lg text-[#75796b] line-through">₹199</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#f7f4e9] p-6">
              <p className="text-lg leading-relaxed text-[#45483c]">
                Durable, eco-friendly scrubbers made from natural coconut husk.
                Perfect for gentle yet effective cleaning.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-sm uppercase tracking-widest text-[#75796b]">
                  Quantity
                </label>

                <div className="flex w-fit items-center gap-6 rounded-full bg-[#ebe8de] px-4 py-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-[#3e5219] hover:bg-[#e5e2d9]">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-4 text-center text-lg font-medium">1</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-[#3e5219] hover:bg-[#e5e2d9]">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <ProductActions
                product={{
                  id: "scrub",
                  name: "Coconut Coir Scrub",
                  price: 149,
                }}
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-[#c5c8b8]/30 pt-4">
              <div className="flex items-center gap-3 text-[#45483c]">
                <Truck className="h-5 w-5 text-[#3e5219]" />
                <span className="text-sm">
                  Free shipping on orders above ₹499
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#45483c]">
                <Leaf className="h-5 w-5 text-[#3e5219]" />
                <span className="text-sm">
                  Ships in plastic-free packaging
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline text-4xl lg:text-5xl">
              Why Choose Coconut?
            </h2>
            <p className="mx-auto max-w-2xl text-[#75796b]">
              Replacing synthetic sponges with natural fibers isn&apos;t just
              better for the planet—it&apos;s better for your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#f1eee4] p-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3e5219]/10 text-[#3e5219]">
                <Recycle className="h-9 w-9" />
              </div>
              <h3 className="font-headline text-2xl">100% Biodegradable</h3>
              <p className="leading-relaxed text-[#45483c]">
                Once its life in the kitchen is over, simply toss it in your
                compost bin. It returns to the earth without a trace.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#f7f4e9] p-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#924c00]/10 text-[#924c00]">
                <Package className="h-9 w-9" />
              </div>
              <h3 className="font-headline text-2xl">Plastic-Free</h3>
              <p className="leading-relaxed text-[#45483c]">
                Zero microplastics. Traditional sponges shed tiny plastic
                particles that enter our waterways. Ours don&apos;t.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#f1eee4] p-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#74613c]/10 text-[#5a4927]">
                <Sparkles className="h-9 w-9" />
              </div>
              <h3 className="font-headline text-2xl">Natural Antimicrobial</h3>
              <p className="leading-relaxed text-[#45483c]">
                Coconut fiber is naturally resistant to odors and bacteria,
                staying fresh longer than conventional sponges.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-32 grid grid-cols-1 auto-rows-[250px] gap-6 md:grid-cols-12">
          <div className="relative flex flex-col justify-end overflow-hidden rounded-3xl bg-[#ebe8de] p-10 md:col-span-8">
            <div className="relative z-10">
              <h4 className="mb-2 font-headline text-3xl">
                The Kerala Collection
              </h4>
              <p className="max-w-md text-[#45483c]">
                Sourced from the heart of coconut country, supporting local
                farming communities with every purchase.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Trees className="h-40 w-40" />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#3e5219] p-10 text-white md:col-span-4">
            <ShieldCheck className="h-10 w-10" />
            <div>
              <h4 className="mb-2 font-headline text-2xl">
                Sustainably Crafted
              </h4>
              <p className="text-sm text-[#d2eca2]/80">
                Small batch production ensures the highest quality and lowest
                carbon footprint.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="h-24" />
    </>
  );
}