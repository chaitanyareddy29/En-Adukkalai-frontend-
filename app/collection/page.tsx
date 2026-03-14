import {
  ChevronDown,
  Plus,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal
} from "lucide-react";
import Link from "next/link";



export default function CollectionPage() {
  return (
    <>


      <main className="mx-auto max-w-7xl px-6 py-12">
        <header className="mb-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[#3e5219]">
                Sustainable Kitchenware
              </span>
              <h1 className="-ml-1 font-headline text-6xl leading-[0.9] text-[#1c1c16] md:text-8xl">
                The Conscious Collection.
              </h1>
            </div>

            <div className="flex gap-4 pb-2">
              <button className="flex items-center gap-2 rounded-full border border-[#c5c8b8]/20 bg-[#f7f4e9] px-6 py-3 transition-all hover:bg-[#ebe8de]">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>

              <button className="flex items-center gap-2 rounded-full border border-[#c5c8b8]/20 bg-[#f7f4e9] px-6 py-3 transition-all hover:bg-[#ebe8de]">
                <span className="text-sm font-medium">Sort: Newest</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-12">
          {/* Scrub */}
          <Link href="/product/scrub" className="group block md:col-span-7">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-[#f1eee4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYHUkIl2ky49m0jIT5_MX0QjF9csGruHm1EcM70jf6b1BfCKAJFluER8wK9oMAJnUraiWE9e8ZYdQJ9Qhwy2i70p6kPV0X1O9d37BUk5p9RKjen0C8YwiUkBX2tCCXyCgjegoGDApGP6F71xTUtoqpiYUoOhlAQSE4ioWUxz1vjIsfuTD5Xy-ypRm7xFyxbq5IvhIuwoU_6ptiu5MLusZ7kdTrp2T-1-2MC0AgvZbDU6QWEdfvzTziQnoowUwB8xr9fDw4IG7lQ_8"
                alt="Coconut coir scrub brush"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-6 top-6 flex flex-col gap-2">
                <span className="rounded-sm bg-[#74613c] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f7deaf] backdrop-blur-md">
                  Plastic Free
                </span>
                <span className="rounded-sm bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1c1c16] backdrop-blur-md">
                  Handmade
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-1 font-headline text-3xl transition-colors group-hover:text-[#3e5219]">
                  Coconut Coir Scrub
                </h3>
                <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#45483c]">
                  Naturally anti-bacterial fibers harvested from sustainable
                  coconut husks. Perfect for tough stains without microplastics.
                </p>
                <div className="flex items-center gap-6">
                  <span className="font-headline text-2xl font-medium text-[#924c00]">
                    ₹149
                  </span>
                  <div className="flex items-center gap-2 rounded-full bg-[#3e5219] px-8 py-3 text-white shadow-lg shadow-[#3e5219]/10 transition-all hover:bg-[#556b2f]">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-sm font-bold uppercase tracking-tighter">
                      Add to Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Bottle */}
          <Link
            href="/product/bottle"
            className="group mt-0 block md:col-span-5 md:mt-24"
          >
            <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-xl bg-[#f7f4e9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdBPA_W-RwjDEG5CNpI8y2DGdCFvzvWrLdk400fli_f7xXG8j5vV77pusKANeHNO2p1Ae4yzDSAiRmmt4zBW1rzoRSTZzuUIXhObTZ3VegxBjnNBExA6tuynj4b6y4LcA6kDdGKn2uTW9XmLgWZhsNCUlxPOawCvszuPndgXDiMH6NGHI0-5bjdSEFWlWs4rXG4gR5REcVKS5LKGWf9Lbx0HTiBH8kaio1KYBK6RJCSScbOTy9R2D6cnIOB-XxXjUuVIDV7niO9B0"
                alt="Bamboo water bottle"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-6 top-6">
                <span className="rounded-sm bg-[#74613c] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f7deaf]">
                  Sustainable Wood
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-1 font-headline text-3xl transition-colors group-hover:text-[#3e5219]">
                Bamboo Water Bottle
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#45483c]">
                Insulated stainless steel core with a single-piece bamboo
                exterior shell.
              </p>
              <div className="flex items-center gap-6">
                <span className="font-headline text-2xl font-medium text-[#924c00]">
                  ₹899
                </span>
                <div className="flex items-center gap-2 rounded-full bg-[#fda055] px-6 py-3 text-[#703800] transition-all hover:opacity-90">
                  <Plus className="h-4 w-4" />
                  <span className="text-sm font-bold uppercase tracking-tighter">
                    Add
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div className="py-12 md:col-span-12">
            <div className="flex flex-col items-center rounded-[2.5rem] bg-[#556b2f]/10 p-12 text-center">
              <h2 className="mb-4 font-headline text-4xl italic text-[#3e5219]">
                &quot;The kitchen is the heart of the home, let it breathe
                naturally.&quot;
              </h2>
              <div className="h-px w-12 bg-[#c5c8b8]/30" />
            </div>
          </div>

          {/* Straws */}
          <Link href="/product/straws" className="group block md:col-span-4">
            <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-[#f1eee4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDflF5WKqDv4Ww4tx697Tu6cWnGo89QP4NuGPefGmTxuV89DsZffsSNyvvnQHv6HRSf_wcKEPcqisw-Gd1zRaXsLJrNJvL0IYMH4x7Xxa6TnM-G_EAJrOrTtH5OqRPoTWQSqrgprNxOt817GfOfXKgbNHbXkemEhcJPJ7gNUfBFgbz7XsIDBkK5XBnV0BnVBLDms1JW27UMS0UGUZYc21nJAA1vHOF4c6auqiZ17F3-cX6pZzhZmqgMvLxG7C0eu5niV4awGCciC0"
                alt="Wheat straws"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-6 top-6">
                <span className="rounded-sm bg-[#74613c] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f7deaf]">
                  Compostable
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-1 font-headline text-2xl">Wheat Straws</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-headline text-xl font-medium text-[#924c00]">
                  ₹299
                  <span className="ml-1 font-sans text-xs text-[#45483c]/60">
                    / pack of 50
                  </span>
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3e5219] text-white transition-transform hover:scale-110">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Scrub card instead of Clay Cooking Pot */}
          <Link href="/product/scrub" className="group block md:col-span-4">
            <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-[#f1eee4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLIX_q2kNZtQ2gQ2CqTiOPjAGA4oS6_1QJ124Zc9aLOufBO95zzTAH9JwC7Tg_G7fK3fpzUpWYGYM8s11kBtFe40VHNibAOArYUW2tGDleYD-tgwM8LAtw1mbMcNQ7CfbP6i3lCOPigFjg52u-2WBDX56czfrDAPH-4jN-5skaMOgrhlk2-_F7UZI0YZoa3lJOJm5Z_o4kSUfljtB6sRdi_DooyLYthmPFQ9E5RLX7vwS4UPLYtCUTXPXjxbkPRDLGrmJ7qWBMYyc"
                alt="Coconut Coir Scrub"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-1 font-headline text-2xl">Coconut Coir Scrub</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-headline text-xl font-medium text-[#924c00]">
                  ₹149
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ebe8de] text-[#1c1c16] transition-all hover:bg-[#3e5219] hover:text-white">
                  <Plus className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Bottle card instead of Organic Linen Towel */}
          <Link href="/product/bottle" className="group block md:col-span-4">
            <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-[#f1eee4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdBPA_W-RwjDEG5CNpI8y2DGdCFvzvWrLdk400fli_f7xXG8j5vV77pusKANeHNO2p1Ae4yzDSAiRmmt4zBW1rzoRSTZzuUIXhObTZ3VegxBjnNBExA6tuynj4b6y4LcA6kDdGKn2uTW9XmLgWZhsNCUlxPOawCvszuPndgXDiMH6NGHI0-5bjdSEFWlWs4rXG4gR5REcVKS5LKGWf9Lbx0HTiBH8kaio1KYBK6RJCSScbOTy9R2D6cnIOB-XxXjUuVIDV7niO9B0"
                alt="Bamboo Water Bottle"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-1 font-headline text-2xl">Bamboo Water Bottle</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-headline text-xl font-medium text-[#924c00]">
                  ₹899
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ebe8de] text-[#1c1c16] transition-all hover:bg-[#3e5219] hover:text-white">
                  <Plus className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <section className="mx-auto max-w-7xl border-t border-[#c5c8b8]/10 px-6 py-24">
        <h2 className="mb-12 font-headline text-4xl">Shop by Material</h2>

        <div className="grid h-[500px] grid-cols-2 gap-4 md:grid-cols-4">
          <div className="group relative flex cursor-pointer items-end overflow-hidden rounded-2xl bg-[#f7f4e9] p-8">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzmA5PW0CY3XePxifw1InzLxlR_ya1hGIjNq32e-QmIVkx8QiqxdUTXfksyuooW7HEMtltJea3_6RQEScDNz_S_UcrJJv782S7V3u2Zy5pJ6ugcQA7W9LKRdAUf4HCeoCnxWOI3nyhWd3VmAeIEnrr6oXqX5RsEnqvYmKjglNrr0lEo7-yI9l9EbbSPy8fB-q4STKs2beGjx6FevI2_y3orCmCGOtzQn9lpN6tQue9taoFI3pti_PUbGhmBOkxnIDlSI3rFxiR5G4"
              alt="Bamboo"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="relative z-20 font-headline text-3xl text-white">
              Bamboo
            </span>
          </div>

          <div className="group relative flex cursor-pointer items-end overflow-hidden rounded-2xl bg-[#f7f4e9] p-8 md:row-span-2">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7HciR7ZsXUot-N8D1FkIrN47NqFzKko2MqvHaxOytTZs11emXlKx3DlcHfVBxJV_deaWzpnDqwHeSochSNxzqN8t6SnTs8g3cPXVYSLT0Ecosihku3pxneQaSOsOjaNcbV7XTckfRfd-7FfXFyg4d6k9QefCXe8WgHBKB-Uq0pvu1LakeVuqAd1E1-XzVGUqRDwjXElqbhACD5wtv5Y9GqaPiBwesflAn-0UYhg2aUUJx1GW_Y1icV0kzpOtHDS6LkK6krRn21lk"
              alt="Clay"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="relative z-20 font-headline text-3xl text-white">
              Clay
            </span>
          </div>

          <div className="group relative flex cursor-pointer items-end overflow-hidden rounded-2xl bg-[#f7f4e9] p-8 md:col-span-2">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPnaXjl7FCSf6_cCQjYbOYq2nbGeTBmxmOzvOGRi4hQPsq_xMQOHNp3cxCtSxzZTQj2OQ5OIxvx9UK5NORO3O8hzwYagEUSPgOzXUqFAOzzrxDW9N3i9fQ4GUtJySMeO0XuMfYQJRFfI-SbUF3wPm12GVzgFX-zaU3SVkYj6hgNGXTJwxReDbyhZfihr2d7DZinmLvy4XEQw0OaDyeIrWNgB6-OZgyceG7bKnpbxGq_ZLbVPdLR8zIL-Ynn-vxnwD5tpRWejK45w"
              alt="Coconut Husk"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="relative z-20 font-headline text-4xl text-white">
              Coconut Husk
            </span>
          </div>

          <div className="group relative flex cursor-pointer items-end overflow-hidden rounded-2xl bg-[#f7f4e9] p-8">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuea5A44wFUdSj-fq__PSrd8MQiyeF31MeNA6TNI3lXIIMRdVPrPqz4OVj9Z4rz1IgMphephXkm6OEM3eo6XBo9l4NofjI5dk3bSiN1TSltraIrSmWTpxcBb2zmYGmEFcdm6MLTg3gOZ4gfHsosWkJ5UpIi27F74IwAinheRtS9zVGf64P5KOmymM6sb8qouTnbXyYRzw0qbBQmY6Ytwo3UHUGSj7WQPfMueJodGKRal-DWjk_MN0fXXkLsDs5YMFidfD4C2QNk40"
              alt="Copper"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="relative z-20 font-headline text-3xl text-white">
              Copper
            </span>
          </div>

          <div className="group relative flex cursor-pointer items-end overflow-hidden rounded-2xl bg-[#f7f4e9] p-8">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzGJgck-tx4V721kfCLEFmFd_ua4fVxn_yHc9mr2bVE563DH3OGjJ0deUq1kCyAxKPplyZbEwVz9WIERwT8g7TerHeEF6CIIXbqaLkT5yjuKxYQCl5F8I7x_b8EI8bqRv5EzmTR2KblqKXSnnXLfc9oODbS9twJcE2kx1Et8WKBflo0wtVIHKMMotD6fhofZPLV1rdJV2EazccwfIM6vLLTEEfjRAO5h3Wk0cmj9oMEr6pleApv86AfhHlKljhWY1m0AxEn5pRFnw"
              alt="Cotton"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="relative z-20 font-headline text-3xl text-white">
              Cotton
            </span>
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </>
  );
}