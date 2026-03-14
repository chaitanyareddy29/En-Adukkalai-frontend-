"use client";

import AddressFormModal from "@/components/AddressFormModal";
import {
  BadgePercent,
  CalendarDays,
  Heart,
  Home,
  Leaf,
  LogOut,
  Pencil,
  Plus,
  ReceiptText,
  User,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type OrderItem = {
  product_name: string;
  product_id: string;
  quantity: number;
  price: string;
};

type Order = {
  id: number;
  status: string;
  total_price: string;
  created_at: string;
  items: OrderItem[];
};

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

type UserData = {
  id: number;
  username: string;
  email: string;
};

export default function AccountPage() {
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("access");

    if (!savedUser || !token) {
      setLoading(false);
      return;
    }

    const parsedUser = JSON.parse(savedUser);
    setUser(parsedUser);

    fetchOrders(token);
    fetchAddresses(token);
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("access");

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  const fetchOrders = async (token?: string) => {
    try {
      const accessToken = token || localStorage.getItem("access");

      if (!accessToken) {
        setLoading(false);
        return;
      }

      const res = await fetch(
        "https://en-adukkalai-backend.onrender.com/api/orders/my-orders/?limit=3",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setOrders(data);
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAddresses = async (token?: string) => {
    try {
      const accessToken = token || localStorage.getItem("access");
  
      if (!accessToken) return;
  
      const res = await fetch("https://en-adukkalai-backend.onrender.com/api/auth/addresses/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setAddresses(data);
      }
    } catch (error) {
      console.error("Failed to fetch addresses", error);
    }
  };

  const handleLogout = async () => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");
  
    try {
      if (refresh) {
        await fetch("https://en-adukkalai-backend.onrender.com/api/auth/logout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(access && { Authorization: `Bearer ${access}` }),
          },
          body: JSON.stringify({ refresh }),
        });
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
  
    router.push("/login");
  };

  const handleDeleteAddress = async (addressId: number) => {
    const confirmed = window.confirm("Delete this address?");
    if (!confirmed) return;

    try {
      const res = await fetch(
        `https://en-adukkalai-backend.onrender.com/api/auth/addresses/${addressId}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );

      if (res.ok) {
        fetchAddresses();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete address");
      }
    } catch (error) {
      alert("Failed to delete address");
    }
  };

  if (!user && !loading) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-headline text-5xl text-[#1c1c16]">My Account</h1>
        <p className="mt-4 text-[#45483c]">
          Please login to see your account details.
        </p>
      </main>
    );
  }

  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-12 pb-32">
        <div className="mb-16">
          <h2 className="mb-4 font-headline text-6xl font-light tracking-tighter lg:text-7xl">
            My Account
          </h2>
          <div className="h-0.5 w-24 rounded-full bg-[#556b2f]" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-4">
            <div className="flex flex-col items-center rounded-xl bg-[#f7f4e9] p-8 text-center">
              <div className="mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-[#e5e2d9]">
                <User className="h-12 w-12 text-[#3e5219]" />
              </div>

              <h3 className="mb-1 font-headline text-3xl">
                {user?.username || "User"}
              </h3>
              <p className="text-sm tracking-wide text-[#45483c]">
                {user?.email || ""}
              </p>

              <button
                onClick={() => router.push("/profile/edit")}
                className="mt-8 rounded-full bg-[#3e5219] px-8 py-3 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#556b2f]"
              >
                Edit Profile
              </button>
            </div>

            <div className="rounded-xl bg-[#f7f4e9] p-8">
              <h4 className="mb-6 font-headline text-xl">Navigation</h4>

              <nav className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-4 font-semibold text-[#3e5219]"
                >
                  <User className="h-5 w-5" />
                  <span>Personal Info</span>
                </a>

                <Link
                  href="/orders"
                  className="flex items-center gap-4 text-[#45483c] transition-colors hover:text-[#1c1c16]"
                >
                  <ReceiptText className="h-5 w-5" />
                  <span>Orders</span>
                </Link>

                <a
                  href="#"
                  className="flex items-center gap-4 text-[#45483c] transition-colors hover:text-[#1c1c16]"
                >
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </a>

                <div className="mt-4 border-t border-[#c5c8b8]/20 pt-4">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 font-semibold text-[#924c00] transition-colors hover:text-[#703800]"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          <div className="space-y-10 lg:col-span-8">
            <section>
              <div className="mb-6 flex items-baseline justify-between">
                <h4 className="font-headline text-3xl">Recent Orders</h4>
                <Link
                  href="/orders"
                  className="text-sm font-bold text-[#3e5219] underline underline-offset-4"
                >
                  Show all orders
                </Link>
              </div>

              <div className="space-y-6 rounded-xl bg-white p-6">
                {orders.length === 0 ? (
                  <p className="text-[#45483c]">No orders yet.</p>
                ) : (
                  orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col gap-6 border-b border-[#ebe8de] pb-6 last:border-b-0"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[#45483c]">
                            Order #{order.id}
                          </p>
                          <div className="mt-3 flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4 text-[#3e5219]" />
                              <span className="text-xs text-[#45483c]">
                                {new Date(order.created_at).toLocaleDateString()}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Wallet className="h-4 w-4 text-[#3e5219]" />
                              <span className="text-xs font-bold">
                                ₹{order.total_price}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-sm bg-[#d2eca2] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#394d14]">
                          {order.status}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-xl bg-[#f7f4e9] p-4"
                          >
                            <div>
                              <Link
                                href={`/product/${item.product_id}`}
                                className="block font-headline text-2xl text-[#1c1c16] transition-colors hover:text-[#3e5219]"
                              >
                                {item.product_name}
                              </Link>
                              <p className="mt-1 text-sm text-[#45483c]">
                                Quantity: {item.quantity}
                              </p>
                              <p className="mt-1 text-sm text-[#924c00]">
                                ₹{item.price} each
                              </p>
                            </div>

                            <button
                              onClick={() =>
                                router.push(`/product/${item.product_id}`)
                              }
                              className="whitespace-nowrap rounded-full bg-[#fda055] px-6 py-2 text-xs font-bold text-[#703800]"
                            >
                              Reorder
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center justify-between">
                <h4 className="font-headline text-3xl">Shipping Address</h4>
                {addresses.length < 3 && (
                  <button
                    onClick={() => {
                      setEditingAddress(null);
                      setShowAddressForm(true);
                    }}
                    className="rounded-full bg-[#3e5219] px-5 py-2 text-sm text-white"
                  >
                    Add Address
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="group relative overflow-hidden rounded-xl bg-[#f7f4e9] p-8"
                  >
                    <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                      <Home className="h-16 w-16" />
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                      {address.is_default && (
                        <span className="rounded-sm bg-[#f9dfb1] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#261a00]">
                          Default
                        </span>
                      )}
                      <h5 className="text-sm font-bold tracking-wide">
                        {address.label}
                      </h5>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-[#45483c]">
                      {address.full_name}
                      <br />
                      {address.line1}
                      {address.line2 ? (
                        <>
                          <br />
                          {address.line2}
                        </>
                      ) : null}
                      <br />
                      {address.city}, {address.state} {address.postal_code}
                      <br />
                      {address.country}
                      <br />
                      {address.phone}
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingAddress(address);
                          setShowAddressForm(true);
                        }}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3e5219]"
                      >
                        <Pencil className="h-4 w-4" />
                        Edit Address
                      </button>

                      <button
                        onClick={() => handleDeleteAddress(address.id)}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#924c00]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                {addresses.length < 3 && (
                  <div
                    onClick={() => {
                      setEditingAddress(null);
                      setShowAddressForm(true);
                    }}
                    className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#c5c8b8]/30 p-8 text-center transition-colors hover:bg-[#f7f4e9]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ebe8de] transition-colors group-hover:bg-[#556b2f] group-hover:text-[#d0eba1]">
                      <Plus className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold">Add New Address</p>
                  </div>
                )}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex aspect-video flex-col justify-between rounded-xl bg-[#74613c] p-8 text-[#f7deaf] md:aspect-auto">
                <Leaf className="mb-4 h-10 w-10" />
                <div>
                  <h5 className="mb-2 font-headline text-2xl">Impact Score</h5>
                  <p className="text-sm opacity-80">
                    You&apos;ve saved 12.4kg of plastic waste through your
                    sustainable kitchen choices.
                  </p>
                </div>
              </div>

              <div className="flex aspect-video flex-col justify-between rounded-xl bg-[#e5e2d9] p-8 md:aspect-auto">
                <BadgePercent className="mb-4 h-10 w-10 text-[#924c00]" />
                <div>
                  <h5 className="mb-2 font-headline text-2xl text-[#1c1c16]">
                    Loyalty Points
                  </h5>
                  <p className="text-sm text-[#45483c]">
                    You have 450 points. Use them at checkout for organic
                    rewards.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {user && (
        <AddressFormModal
          open={showAddressForm}
          onClose={() => setShowAddressForm(false)}
          onSaved={() => fetchAddresses()}
          editingAddress={editingAddress}
        />
      )}
    </>
  );
}