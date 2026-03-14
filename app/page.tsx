import {
  ArrowRight,
  Handshake,
  Leaf,
  Search,
  Sparkles
} from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="space-y-16 pb-32">
        <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-end overflow-hidden px-6 pb-12">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6kVjg0CT7y93fFulnqs-IX8EQDUfWntTnjccUeGp_O5G1jGBpe69mZmOq1N_-ZeKZfP-RbJmoZFxQxI-z_m-0QLNe8OnMcHvfa13Ee0frHDLYsXdzooKDFGwFKMRZUYjMNQ5MfIhYkqsa-tPqDlpbFAkoDvm1D3f3zNXK89c78C-jh1d-swnN_OJeDu-L2kzAlJ-mKZlpX41vP-IRnQDaSyFkDM241xU2xFlB9JiXUPDsYfXN1Pw91HNUi_g_fCIUBtTq7Yp-4II"
              alt="A sunlit minimalist natural kitchen"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9ef] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6 text-center">
            <h2 className="font-headline text-5xl font-light leading-none text-[#1c1c16] md:text-7xl">
              En Adukkalai: The Organic Hearth
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#45483c] md:text-xl">
              Natural, sustainable kitchen essentials for a mindful home.
            </p>
            <div className="pt-4">
              <Link
                href="/collection"
                className="inline-block rounded-full bg-[#3e5219] px-10 py-4 font-medium tracking-wide text-white transition-opacity hover:opacity-90"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </section>

        <section className="relative z-20 -mt-12 px-6">
          <div className="mx-auto flex max-w-2xl items-center gap-4 rounded-full bg-[#ebe8de] px-6 py-4 shadow-sm">
            <Search className="h-5 w-5 text-[#45483c]" />
            <input
              type="text"
              placeholder="Search kitchen essentials"
              className="w-full border-none bg-transparent text-[#1c1c16] outline-none placeholder:text-[#45483c]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-8 px-6">
          <div className="flex items-end justify-between">
            <h3 className="font-headline text-4xl text-[#1c1c16]">
              Shop Organic
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
            <div className="group relative overflow-hidden rounded-xl bg-[#f7f4e9] md:col-span-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy1sEQWqMJUmNLAFuYmWCpgO508sp62JUmGpw3muOoj3IfmTyLkGD0U4jpGp6FvTItjaKtziJw16QiSYrzo9JrSuYlb3Pw9xKKy5h4IUqJ0w0v1xsiyqN169syTsr_ePMJSG7mgpGBIx_CPrYxj8Z_sdN0fh7GCyzSWEbfSMH1C-iCtjZAKSxBpOzQCFL5j4Drkumd1iaB4inZi55q_cb3ywuDAoHdKa4ZWkKQSvGyrVjyFOpHGgAEEx3QfCW105pgSb-1CM_O9Ao"
                alt="Handcrafted teak wood kitchen utensils and boards"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="mb-2 inline-block rounded-sm bg-[#74613c] px-3 py-1 text-xs uppercase tracking-widest text-[#f7deaf]">
                  Renewable
                </span>
                <h4 className="font-headline text-3xl">Wood</h4>
                <p className="text-sm opacity-90">Warmth for your counters</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-[#e5e2d9] md:col-span-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3pNx0mS5PkvlKmDE8e08MnpHR1L03wGoCpDkkvsoNUXrMVH_zhHW3m730vdjUTeMOHnmbeTOnLAvstIWL0z8qrFSzsLlgkJKkWCabmGm1T55nyaC8J5dkFumU5ZSTBW5rNXCl4klaBSyanPPx7aQkPN5RYbnCYXoqkcbcDYkxc9W62g5hQzaZwUOMe-lNLVPxGG75GAoQEEsrMPShwUL-a82_qszrLOlRS53-HHcsC6xxLr6o4zuaxRFkSzFSDSoth-A9cIZdI04"
                alt="Traditional terracotta clay cooking pots"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="font-headline text-3xl">Clay</h4>
                <p className="text-sm opacity-90">Earthy tradition</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between overflow-hidden rounded-xl bg-[#f1eee4] p-8 md:col-span-12 md:flex-row md:p-12">
              <div className="z-10 max-w-md space-y-4">
                <h4 className="font-headline text-4xl text-[#1c1c16]">
                  Coconut
                </h4>
                <p className="text-lg text-[#45483c]">
                  Harnessing the versatility of nature&apos;s most resilient fiber
                  for sustainable utility.
                </p>
                <Link
                href="/product/scrub"
                className="flex items-center gap-2 font-bold text-[#3e5219]"
              >
                Shop Coconut Range
                <ArrowRight className="h-5 w-5" />
              </Link>
              </div>
              <div className="relative mt-8 h-64 w-full md:mt-0 md:h-full md:w-1/2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1G5ulLoYTUdlVCw5iJ_1uIDWQGPxKd6recKEqahq-A6x0Y14QuLB1bTRG1KUEA17suaIfsD3lNBRg1yLArwN7Ia3X_8A4nG8nVueVrlw5X9nhGM7U8O8WCbTHLjnKIOJOlno67w8erNqFlQr3Hecx2M8IawmtsNkLL4xRj5DIjVP7h0XMhgcOMb3HE88Pu0lO4KzGgpWNGglu-cPlEfLl2txwG_UCCgE7_dWZ9Po_JmV_5LlalWvDD5LgAvTAD54fCwVg0fmo6Bk"
                  alt="Eco-friendly coconut fiber brushes and bowls"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4e9] py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            <div className="space-y-2 text-center">
              <h3 className="font-headline text-4xl text-[#1c1c16]">
                The Featured Curations
              </h3>
              <p className="text-[#45483c]">
                Handpicked for a zero-waste lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
              <Link href="/product/scrub" className="group block">
                <div className="flex flex-col gap-6">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg bg-white p-12">
                    <span className="absolute left-4 top-4 rounded-sm bg-[#74613c] px-2 py-1 text-[10px] uppercase tracking-tighter text-[#f7deaf]">
                      Plastic Free
                    </span>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHmztyBdiX5_7gmxxI79jZ3KtOpfGAa80jSHqtVc4r41pprVChhCYkUjxkXxm7l-5tY8UdecTVsq7SNXyrJLkZeARWATODordTKuTFnikyn5_x38mAnnrNCo4UmLdtBmAS_C5mcETqtJemZim7o71s_uCbA8oB4K_5NCs3sLC3MV7_9FcqyD4rj3e5QQmZjHRbWFwSfTn7PN7vkynwhDuIKuP_qz_qebUzg04ZC1keAYl4PQf4X29lLdCOX0Pve_pqOr4Z_4y60VM"
                      alt="Natural coconut coir scrubbers"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-2xl text-[#1c1c16] group-hover:text-[#3e5219]">
                      Coconut Fiber Scrubber
                    </h4>
                    <p className="text-sm text-[#45483c]">
                      Tough on stains, gentle on the earth. 100% compostable.
                    </p>
                    <p className="mt-2 font-bold text-[#924c00]">₹149</p>
                  </div>
                </div>
              </Link>

              <Link href="/product/bottle" className="group block">
                <div className="flex flex-col gap-6 md:mt-12">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg bg-white p-12">
                    <span className="absolute left-4 top-4 rounded-sm bg-[#74613c] px-2 py-1 text-[10px] uppercase tracking-tighter text-[#f7deaf]">
                      Sourced in India
                    </span>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxEQ9fHBUUIFKFap3m9GNu53s25yZk5dUDVpHTdQjK8uy-frKeMAXk5Cq704KL8bB0kwaeLTe8AFneODLrwLZbfs72JdFzXSpqJwXAGz1H0Kd3FnQ0OuSPZXifpnfHNqPxLS1la3SG7vl4nTeAxEPXkRTMMVPiyo3Wjp_nfAXMZWdBN-2fSI1ZvaDWZosrTaddDp4IBvL9zkCQ02piXVb0L0O-0QvG4GzKcmUuXqMKSbwpnEiQ0qigzopeNFvFQu5XryaNFj3O6Ak"
                      alt="Polished wooden water bottle"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-2xl text-[#1c1c16] group-hover:text-[#3e5219]">
                      Hand-Turned Neem Bottle
                    </h4>
                    <p className="text-sm text-[#45483c]">
                      Natural medicinal properties of Neem in a sleek, ergonomic
                      design.
                    </p>
                    <p className="mt-2 font-bold text-[#924c00]">₹1,299</p>
                  </div>
                </div>
              </Link>


              <Link href="/product/straws" className="group block">
  <div className="flex flex-col gap-6">
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg bg-white p-12">

      <span className="absolute left-4 top-4 rounded-sm bg-[#74613c] px-2 py-1 text-[10px] uppercase tracking-tighter text-[#f7deaf]">
        Reusable
      </span>

      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq-Uf40MiwJ38Bd04gqvzMJsa-wYvkXRtRxzcoS2HibUU02XhtqhcGJnDq9uU8MBS_009uByaUy5Nl067qICdXOgSNMMRjGv_Yotrxx-dYHQeqOiUVmBxRdwTKdoFGSYUAuXeBlggU0kLuhXr1YqBWp25Sqkq-Id7y9cYp2qd1shMSDiu0i4w0ZTKHVd_CJwlJclnpFEZyGxAzfGTcNUHw_sE0rTNcY3z8lkHmPpb_LDQmUTNyEDgP70_K7pH4wvCYSHdgjDN0zbI"
        alt="Reusable bamboo drinking straws"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
      />

    </div>

    <div className="space-y-2">

      <h4 className="font-headline text-2xl text-[#1c1c16] group-hover:text-[#3e5219]">
        Bamboo Drinking Straws
      </h4>

      <p className="text-sm text-[#45483c]">
        Sustainable bamboo straws for eco-friendly sipping. Durable,
        reusable and plastic-free.
      </p>

      <p className="mt-2 font-bold text-[#924c00]">₹199</p>

    </div>
  </div>
</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 rounded-3xl bg-[#556b2f] p-10 text-center text-[#d0eba1] md:grid-cols-3 md:p-20 md:text-left">
            <div className="space-y-4">
              <Leaf className="h-9 w-9" />
              <h5 className="font-headline text-2xl">Earth First</h5>
              <p className="text-sm opacity-80">
                Our supply chain eliminates plastics from production to
                delivery.
              </p>
            </div>

            <div className="space-y-4">
              <Handshake className="h-9 w-9" />
              <h5 className="font-headline text-2xl">Artisan Led</h5>
              <p className="text-sm opacity-80">
                Supporting local craft communities across the southern
                peninsula.
              </p>
            </div>

            <div className="space-y-4">
              <Sparkles className="h-9 w-9" />
              <h5 className="font-headline text-2xl">Timeless Design</h5>
              <p className="text-sm opacity-80">
                Kitchenware designed to age beautifully and last generations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}