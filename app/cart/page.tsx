"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-headline text-5xl text-[#1c1c16]">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-4 text-[#45483c]">Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-8 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="rounded-xl bg-[#f7f4e9] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-2xl text-[#1c1c16]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[#924c00]">
                      ₹{item.price} each
                    </p>

                    <p className="mt-1 text-sm text-[#45483c]">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-10 w-10 rounded-full bg-[#ebe8de]"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-10 w-10 rounded-full bg-[#3e5219] text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-full bg-[#924c00] px-4 py-2 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-[#ebe8de] p-6">
            <h2 className="font-headline text-3xl text-[#1c1c16]">
              Total: ₹{totalPrice}
            </h2>

            <div className="mt-4 flex gap-4">
              <button
                onClick={() => router.push("/checkout")}
                className="rounded-full bg-[#3e5219] px-6 py-3 text-white"
              >
                Checkout
              </button>

              <button
                onClick={clearCart}
                className="rounded-full bg-[#924c00] px-6 py-3 text-white"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}