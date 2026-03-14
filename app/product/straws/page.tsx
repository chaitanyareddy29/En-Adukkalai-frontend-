import ProductActions from "@/components/ProductActions";
import {
  Droplets,
  FlaskConical,
  Globe,
  Leaf,
  Sprout,
  Star,
  StarHalf
} from "lucide-react";
  
  export const metadata = {
    title: "Wheat Straws | En Adukkalai",
    description:
      "Natural, compostable wheat straws. A sustainable alternative to plastic. Durable and chemical-free.",
  };
  
  export default function WheatStrawsPage() {
    return (
      <>

  
        <main className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="relative lg:col-span-7">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[#f7f4e9]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDflF5WKqDv4Ww4tx697Tu6cWnGo89QP4NuGPefGmTxuV89DsZffsSNyvvnQHv6HRSf_wcKEPcqisw-Gd1zRaXsLJrNJvL0IYMH4x7Xxa6TnM-G_EAJrOrTtH5OqRPoTWQSqrgprNxOt817GfOfXKgbNHbXkemEhcJPJ7gNUfBFgbz7XsIDBkK5XBnV0BnVBLDms1JW27UMS0UGUZYc21nJAA1vHOF4c6auqiZ17F3-cX6pZzhZmqgMvLxG7C0eu5niV4awGCciC0"
                  alt="Natural wheat straws bundle"
                  className="h-full w-full object-cover"
                />
              </div>
  
              <div className="absolute left-6 top-6 rounded-sm bg-[#74613c] px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold tracking-wider text-[#f7deaf]">
                  Plastic Free
                </span>
              </div>
            </div>
  
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div>
                <h1 className="mb-4 font-headline text-6xl leading-tight text-[#1c1c16] lg:text-7xl">
                  Wheat Straws
                </h1>
  
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex text-[#924c00]">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <StarHalf className="h-5 w-5 fill-current" />
                  </div>
                  <span className="text-sm text-[#45483c]">(124 reviews)</span>
                </div>
  
                <p className="text-xl leading-relaxed text-[#45483c]">
                  Natural, compostable wheat straws. A sustainable alternative to
                  plastic. Durable and chemical-free.
                </p>
              </div>
  
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-4xl font-bold text-[#3e5219]">
                  ₹299
                </span>
                <span className="text-lg text-[#45483c]">for a pack of 50</span>
              </div>
  
              <div className="flex flex-col gap-4">
              <ProductActions
                product={{
                  id: "straws",
                  name: "Bamboo Drinking Straws",
                  price: 199,
  }}
/>
              
              </div>
            </div>
          </div>
  
          <section className="mt-32">
            <h2 className="mb-12 text-center font-headline text-4xl">
              Why Choose Wheat?
            </h2>
  
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg bg-[#f1eee4] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#556b2f] text-[#d0eba1]">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-2xl">100% Compostable</h3>
                <p className="leading-relaxed text-[#45483c]">
                  Returns to the earth in 90 days. No microplastics, no guilt.
                </p>
              </div>
  
              <div className="flex flex-col gap-4 rounded-lg bg-[#f7f4e9] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#556b2f] text-[#d0eba1]">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-2xl">No Soggy Mess</h3>
                <p className="leading-relaxed text-[#45483c]">
                  Unlike paper straws, wheat stays firm in hot or cold drinks for
                  hours.
                </p>
              </div>
  
              <div className="flex flex-col gap-4 rounded-lg bg-[#f1eee4] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#556b2f] text-[#d0eba1]">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-2xl">Chemical Free</h3>
                <p className="leading-relaxed text-[#45483c]">
                  Sterilized using only heat and water. Safe for your family.
                </p>
              </div>
            </div>
          </section>
  
          <section className="mt-32 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-8 font-headline text-5xl leading-tight">
                Eco-friendly benefits that matter.
              </h2>
  
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="pt-1 text-[#3e5219]">
                    <Sprout className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-headline text-2xl">
                      Agricultural Upcycling
                    </h4>
                    <p className="leading-relaxed text-[#45483c]">
                      We use the stalks left over after the wheat harvest, turning
                      &quot;waste&quot; into a valuable resource for your kitchen.
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-6">
                  <div className="pt-1 text-[#3e5219]">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-headline text-2xl">
                      Carbon Negative
                    </h4>
                    <p className="leading-relaxed text-[#45483c]">
                      The production process emits significantly less CO2 compared
                      to plastic or even paper straw manufacturing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f1eee4] p-12">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2DZzPMXE4_cAXO0otOSzgfvRsnL-DQiHBUzhnRl0p4oa3yE_awdMBnAzsWNh-TwlrPYVxgJHkeIi19aXPLJNJMMjgcCwc0pmss6559uBM3a28Aqv4Yb7BHCcJF2Qt78HGh1ZlO4mKUP9miSwHRdOhYZ1H41QSm5uwzIJsswoAexZkgJWaPeEbxRkbfrVjX24D8KyvVI93um9AXuw51yhOCi4MyrWdK5ket9ozTOH9XTPe76w3y2fPBKXC68DIiW2UsvlMjmTuyR8"
                  alt="Eco friendly lifestyle"
                  className="h-full w-full rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
          </section>
  
          <section className="mb-20 mt-32 rounded-xl bg-[#f7f4e9] p-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="mb-2 text-sm uppercase tracking-widest text-[#45483c]">
                  Origin
                </p>
                <p className="font-headline text-2xl">Local Farms</p>
              </div>
  
              <div className="text-center">
                <p className="mb-2 text-sm uppercase tracking-widest text-[#45483c]">
                  Diameter
                </p>
                <p className="font-headline text-2xl">3-6 mm</p>
              </div>
  
              <div className="text-center">
                <p className="mb-2 text-sm uppercase tracking-widest text-[#45483c]">
                  Length
                </p>
                <p className="font-headline text-2xl">20 cm</p>
              </div>
  
              <div className="text-center">
                <p className="mb-2 text-sm uppercase tracking-widest text-[#45483c]">
                  Life Cycle
                </p>
                <p className="font-headline text-2xl">Earth to Earth</p>
              </div>
            </div>
          </section>
        </main>
  
        
  
        <div className="h-20" />
      </>
    );
  }