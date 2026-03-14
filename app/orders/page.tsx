"use client";

import { CalendarDays, Wallet } from "lucide-react";
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

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("access");

      if (!token) {
        router.push("/login");
        return;
      }

      const res = await fetch("https://en-adukkalai-backend.onrender.com/api/orders/my-orders/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        router.push("/login");
        return;
      }

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

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-headline text-5xl text-[#1c1c16]">All Orders</h1>

      <div className="mt-8 space-y-6">
        {loading ? (
          <p className="text-[#45483c]">Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-[#45483c]">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="rounded-xl bg-white p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#45483c]">
                    Order #{order.id}
                  </p>
                </div>

                <div className="rounded-sm bg-[#d2eca2] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#394d14]">
                  {order.status}
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-[#f7f4e9] p-4"
                  >
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
                ))}
              </div>

              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#3e5219]" />
                  <span className="text-xs text-[#45483c]">
                    {new Date(order.created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-[#3e5219]" />
                  <span className="text-xs font-bold">₹{order.total_price}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}