"use client";

import AddressFormModal from "@/components/AddressFormModal";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Address = {
  id: number;
  label: string;
  full_name: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: boolean;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart, removeFromCart } = useCart();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>("new");
  const [showAddressModal, setShowAddressModal] = useState(false);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingAddresses, setLoadingAddresses] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("access");

    if (!token) {
      router.push("/login");
      return;
    }

    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.email) setEmail(user.email);
      if (user.username) setFullName(user.username);
    }

    fetchAddresses(token);
  }, [router]);

  const fetchAddresses = async (token?: string) => {
    try {
      const accessToken = token || localStorage.getItem("access");

      if (!accessToken) {
        router.push("/login");
        return;
      }

      const res = await fetch(
        "https://en-adukkalai-backend.onrender.com/api/auth/addresses/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        router.push("/login");
        return;
      }

      const data = await res.json();

      if (res.ok) {
        setAddresses(data);

        const defaultAddress =
          data.find((addr: Address) => addr.is_default) || data[0];

        if (defaultAddress) {
          setSelectedAddressId(String(defaultAddress.id));
          fillAddress(defaultAddress);
        } else {
          setSelectedAddressId("new");
        }
      }
    } catch (error) {
      console.error("Failed to fetch addresses", error);
    } finally {
      setLoadingAddresses(false);
    }
  };

  const fillAddress = (addr: Address) => {
    setFullName(addr.full_name || "");
    setPhone(addr.phone || "");
    setAddress(
      [
        addr.line1,
        addr.line2,
        `${addr.city}, ${addr.state} ${addr.postal_code}`,
        addr.country,
      ]
        .filter(Boolean)
        .join(", ")
    );
  };

  const handleAddressSelect = (value: string) => {
    setSelectedAddressId(value);

    if (value === "new") {
      const savedUser = localStorage.getItem("user");
      const user = savedUser ? JSON.parse(savedUser) : null;

      setFullName(user?.username || "");
      setEmail(user?.email || "");
      setPhone("");
      setAddress("");
      return;
    }

    const selected = addresses.find((addr) => String(addr.id) === value);
    if (selected) {
      fillAddress(selected);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    if (!address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border px-4 py-3 outline-none transition ${
      hasError
        ? "border-red-500 bg-red-50 text-[#1c1c16] focus:border-red-500"
        : "border-transparent bg-[#ebe8de] text-[#1c1c16] focus:border-[#3e5219]"
    }`;

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) {
      setMessage("Please fill the required fields.");
      return;
    }

    if (cart.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    const token = localStorage.getItem("access");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://en-adukkalai-backend.onrender.com/api/orders/checkout/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            full_name: fullName,
            email,
            phone,
            address,
            items: cart,
          }),
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        router.push("/login");
        return;
      }

      const data = await res.json();

      if (res.ok) {
        setMessage(`Order placed successfully. Order ID: ${data.order_id}`);
        clearCart();

        setTimeout(() => {
          router.push("/orders");
        }, 1200);
      } else {
        setMessage(data.error || "Checkout failed");
      }
    } catch {
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedAddress =
    selectedAddressId !== "new"
      ? addresses.find((addr) => String(addr.id) === selectedAddressId)
      : null;

  return (
    <>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="font-headline text-3xl text-[#1c1c16] sm:text-5xl">
          Checkout
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
          <form
            onSubmit={handleCheckout}
            className="order-2 space-y-4 md:order-1"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-[#45483c]">
                Saved Address
              </label>

              <select
                value={selectedAddressId}
                onChange={(e) => handleAddressSelect(e.target.value)}
                className="w-full rounded-xl border border-transparent bg-[#ebe8de] px-4 py-3 outline-none focus:border-[#3e5219]"
                disabled={loadingAddresses}
              >
                <option value="new">Use New Address</option>
                {addresses.map((addr) => (
                  <option key={addr.id} value={addr.id}>
                    {addr.label} - {addr.line1}
                  </option>
                ))}
              </select>
            </div>

            {selectedAddress && (
              <div className="rounded-2xl border border-[#d9d4c7] bg-[#f7f4e9] p-4 text-[#1c1c16]">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-[#3e5219] px-3 py-1 text-xs font-semibold text-white">
                    {selectedAddress.label}
                  </span>
                  {selectedAddress.is_default && (
                    <span className="text-xs font-semibold text-[#3e5219]">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm leading-7">
                  <span className="font-semibold">
                    {selectedAddress.full_name}
                  </span>
                  <br />
                  {selectedAddress.line1}
                  {selectedAddress.line2 ? (
                    <>
                      <br />
                      {selectedAddress.line2}
                    </>
                  ) : null}
                  <br />
                  {selectedAddress.city}, {selectedAddress.state}{" "}
                  {selectedAddress.postal_code}
                  <br />
                  {selectedAddress.country}
                  <br />
                  {selectedAddress.phone}
                </p>
              </div>
            )}

            <div>
              <input
                type="text"
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass(errors.fullName)}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass(errors.email)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass(errors.phone)}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Address *"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass(errors.address)}
                rows={4}
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowAddressModal(true)}
              className="w-full rounded-full border border-[#3e5219] bg-white py-3 font-semibold text-[#3e5219] transition hover:bg-[#f7f4e9]"
            >
              Add Address
            </button>

            {message && (
              <p className="rounded-lg bg-[#f7f4e9] px-4 py-3 text-sm text-[#3e5219]">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || cart.length === 0}
              className="w-full rounded-full bg-[#3e5219] py-4 text-white disabled:opacity-60"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>

          <div className="order-1 rounded-2xl bg-[#f7f4e9] p-5 sm:p-6 md:order-2">
            <h2 className="font-headline text-2xl text-[#1c1c16] sm:text-3xl">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-sm text-[#45483c]">No items in cart.</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 border-b border-[#e2ddd0] pb-4 last:border-b-0"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium sm:text-base">
                        {item.name} × {item.quantity || 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="mt-1 w-fit text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    <span className="shrink-0 text-sm sm:text-base">
                      ₹{item.price * (item.quantity || 1)}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 border-t border-[#c5c8b8]/30 pt-4 text-lg font-bold sm:text-xl">
              Total: ₹{totalPrice}
            </div>
          </div>
        </div>
      </main>

      <AddressFormModal
        open={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSaved={() => fetchAddresses()}
        editingAddress={null}
      />
    </>
  );
}