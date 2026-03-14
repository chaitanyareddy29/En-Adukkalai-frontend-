"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

type ProductActionsProps = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col gap-4 pt-4">
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3e5219] py-4 text-lg text-white transition-colors hover:bg-[#556b2f]"
      >
        Add to Cart
      </button>

      <button
        type="button"
        onClick={handleBuyNow}
        className="w-full rounded-full bg-[#fda055] py-4 text-lg text-[#703800] transition-opacity hover:opacity-90"
      >
        Buy Now
      </button>
    </div>
  );
}