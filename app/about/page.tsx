import {
  CheckCircle2,
  Leaf,
  Quote
} from "lucide-react";
  
  export const metadata = {
    title: "About Us | En Adukkalai",
    description:
      "Discover the story, philosophy, and artisan roots behind En Adukkalai.",
  };
  
  export default function AboutPage() {
    return (
      <>

  
        <main className="mx-auto max-w-7xl space-y-32 px-6 py-12">
          <header className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="z-10 md:col-span-7">
              <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-[#5a4927]">
                Our Journey
              </span>
  
              <h2 className="font-headline text-6xl leading-tight text-[#1c1c16] md:text-8xl">
                Curating the <span className="italic text-[#3e5219]">Living Kitchen</span>
              </h2>
  
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#45483c]">
                Moving away from the cold, industrial grid of mass production
                toward an editorial experience that feels as tactile as a
                hand-carved bamboo utensil.
              </p>
            </div>
  
            <div className="relative md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#ebe8de]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxjbf3lZbatp5MYWHtxFjd4JRWgg96hCjVe2UXZAfiChPz1uBkKfIpbp54LvtCbiRTsIS-XtpfihFc5kN9d95XeWMU3i5Ns8McFGIssH8Dodyo1-7BSLM7OdnKAoH9JWweE4sSL76jC-t2djiPWqPaKPg5nOl4ZxxI1vedRunEaA78-U1dGHPB9R9-bVY7jh0DDPvqER-yrUDBXguRHR1p9vpLH1g6YBZ60exEY8qNIkiuFHbcv6S-GVlIGDQZmtRZAdCFeuG4RY8"
                  alt="Artisanal wooden kitchen utensils"
                  className="h-full w-full object-cover"
                />
              </div>
  
              <div className="absolute -bottom-6 -left-6 rounded-sm bg-[#74613c] px-4 py-2 text-xs font-semibold tracking-wider text-white">
                EST. 2021
              </div>
            </div>
          </header>
  
          <section className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="order-2 space-y-8 lg:order-1">
              <h3 className="font-headline text-4xl text-[#1c1c16]">Our Story</h3>
  
              <div className="space-y-6 text-lg leading-relaxed text-[#45483c]">
                <p>
                  For too long, the heart of our homes has been dominated by cold,
                  industrial gadgets. We noticed a disconnect between the soul of
                  cooking and the tools we used to create it.
                </p>
  
                <p>
                  En Adukkalai was born from a desire to return to the warmth of
                  organic kitchenware. We believe that every vessel should tell a
                  story, and every spoon should feel like an extension of the hand
                  that holds it.
                </p>
  
                <div className="pt-4">
                  <button className="rounded-full bg-[#3e5219] px-8 py-3 font-medium text-white transition-colors hover:bg-[#556b2f]">
                    Explore Our Craft
                  </button>
                </div>
              </div>
            </div>
  
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl bg-[#f7f4e9] p-8">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA76fliq1xyjPKMJ9IYuj61KGQnGWgRJQk0FJx99niS1VQ_-FMDqCruKQGkDwg6z-b25qgCIjsTagRrygXtfIrrNa7-YdLWQJ57KB2NKu1nPVAEJbaMO7ZvDM1QT4-brIs5a6wfjf-k_1LS8ZkLzzvSjHR-3d1dgO8k7ViWfY0bmwjZmhu1H5N2hpJOCKSS3nQP89vcGCSVWtdAHqIhjEMTegsHz1iz9KjB0_Y4iCfsmY20ATnYeXCBoGlRfmyM_UOFJNgLX3_B2UE"
                    alt="Traditional cookware"
                    className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </section>
  
          <section className="space-y-12">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h3 className="font-headline text-5xl text-[#1c1c16]">
                Rooted in Tradition
              </h3>
              <p className="text-[#45483c]">
                We bridge the gap between ancient craftsmanship and contemporary
                living through intentional design.
              </p>
            </div>
  
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex min-h-[450px] flex-col justify-between rounded-3xl bg-[#f7f4e9] p-10 md:col-span-2">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="rounded-sm bg-[#74613c]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#5a4927]">
                      Heritage Series
                    </span>
                  </div>
  
                  <h4 className="font-headline text-4xl text-[#1c1c16]">
                    The Kerala Collection
                  </h4>
  
                  <p className="max-w-md text-[#45483c]">
                    Inspired by the backwaters and lush spice gardens, these
                    pieces are handcrafted using techniques passed down through
                    seven generations of Malayali artisans.
                  </p>
                </div>
  
                <div className="mt-8 aspect-[21/9] overflow-hidden rounded-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGTfu5cXhPlRKxqTVnMUXOdRLoxCSbPj6-zfqqIOe480Fw52ov9stjO2u8-P6-irJHZrXPfqlIXkYmVGf4LJx_L_J182H87ceXrZEQBebSLIRV1haBe4zKzTGY2inDCmuz8SGuZdwoKnZ_WECZNjXBJwfvx1RTJEgJF3yhRyt3EuddolQxCH-w-IR61LISgxI9T9P2c_9_2JMYFBz2Ojr9sIWBg1L6y3JGSSz4PBIbWaM3xagmQB1WvluE6C53L8Cd1Voe-EKOiGI"
                    alt="Kerala spice plantation"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
  
              <div className="flex flex-col items-center space-y-6 rounded-3xl bg-[#fda055]/10 p-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fda055] text-white">
                  <Leaf className="h-10 w-10" />
                </div>
  
                <h4 className="font-headline text-3xl text-[#924c00]">
                  Local Soul
                </h4>
  
                <p className="text-sm text-[#45483c]">
                  Supporting 45+ local artisan clusters across India, ensuring
                  fair wages and the preservation of dying earthen crafts.
                </p>
  
                <div className="flex -space-x-3 overflow-hidden pt-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf9ef]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCb-cmcv7ILYo_Bt9vA-oShZMrE8qZDLIsBM0gxnn5fq5Ndb__wrWZEYwoVp1exhCIGi5sYvUdZX295GHE1_iMwhvTHOe_DIiWpprTSKKgFX6RIttlbKRSzcIK8JR9cSzh6Bfn0jEI_G9-uMfU5dcJCuwRh5_41F7INDYafnq_5PxE1fm_ai7DNtReoN821aHuELHuao7t5P0qozOmjKVqTXBMo6ORk5maMYvgB6hDc8pd1i2l9R_uCgUgNbYqOmPSx3rqrlOg2NU"
                    alt="Artisan portrait 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf9ef]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD1fqpQM_l2uXJ5qR9nv1iZi4QnJoYZWtwMLx67K5G5uUWm-PqhYSn-6EhLxbYDW-1RhYghUAL8Vggiv0CwRLHSEnOFpBki2L8iqjUfntOtsnJNZk7pkHc-xTZoZrDTWYzSBPzCJBlxlujqFetfqE-AtPzfvozF66_cn-saomFE19TmbipZvGxzEXUKJZypx83BpTkGF76_Q1X7XVAWTX3WqOPhcub9YmiLShrqSxLZhU4alrDd3C9Mcrw1_yd3mtZ-vJG_hOb4fU"
                    alt="Artisan portrait 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf9ef]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNUu3oFP8rYyl5sMTzwCiOmZ5WMr93ukEBBXpXSZBzVn26NPGPwl-YW5_qWvK3Argzf1QfzaaHwp485D-pjC6C_J7pe2JMN6OQIcAq8r2kaR7CWPqlfDg-jre-bVqNPSfBq-b5-uHWW2rWKZwBDdIP3lj2pVtKM0RuNChbImSZ_7ex-YyJCFBoQ_XoyNVBoUk-guwT5ejGnyqsfFkOxxgH3cLyKXWJ-R1O3BjCBX_qoaAVUewP8_k0QSpQzzc5oQtBbdpoy8Gzwtw"
                    alt="Artisan portrait 3"
                  />
                </div>
              </div>
  
              <div className="flex flex-col justify-between rounded-3xl bg-[#ebe8de] p-10 md:col-span-1">
                <h4 className="font-headline text-3xl text-[#1c1c16]">
                  Pure Materials
                </h4>
  
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3 text-[#45483c]">
                    <CheckCircle2 className="h-4 w-4 text-[#3e5219]" />
                    <span>Sustainably sourced Teak</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#45483c]">
                    <CheckCircle2 className="h-4 w-4 text-[#3e5219]" />
                    <span>Natural River Clay</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#45483c]">
                    <CheckCircle2 className="h-4 w-4 text-[#3e5219]" />
                    <span>Hand-beaten Brass</span>
                  </li>
                </ul>
              </div>
  
              <div className="flex flex-col items-center gap-8 rounded-3xl bg-[#556b2f] p-10 text-[#d0eba1] md:col-span-2 md:flex-row">
                <div className="flex-1 space-y-4">
                  <h4 className="font-headline text-3xl">Our Commitment</h4>
                  <p className="leading-relaxed opacity-90">
                    Plastic-free packaging and carbon-neutral shipping are not
                    just options for us—they are the standard. We design for the
                    next century, not the next season.
                  </p>
                </div>
  
                <div className="flex h-48 w-full flex-col items-center justify-center rounded-2xl bg-white/10 p-6 backdrop-blur-md md:w-48">
                  <span className="text-4xl font-bold">100%</span>
                  <span className="mt-1 text-xs uppercase tracking-tighter">
                    Sustainably Made
                  </span>
                </div>
              </div>
            </div>
          </section>
  
          <section className="space-y-8 border-t border-[#c5c8b8]/20 py-24 text-center">
            <Quote className="mx-auto h-14 w-14 text-[#dcc497]" />
            <h2 className="mx-auto max-w-4xl font-headline text-4xl italic text-[#1c1c16] md:text-6xl">
              &quot;A kitchen is more than a utility room; it is a sacred space
              where nourishment begins and memories are seasoned.&quot;
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest text-[#3e5219]">
              — En Adukkalai Philosophy
            </p>
          </section>
        </main>
  
  
        <div className="h-24" />
      </>
    );
  }