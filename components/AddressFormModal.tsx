"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AddressForm = {
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

type EditingAddress = {
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

type Props = {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  editingAddress?: EditingAddress | null;
};

const emptyForm: AddressForm = {
  label: "Home",
  full_name: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "India",
  is_default: false,
};

export default function AddressFormModal({
  open,
  onClose,
  onSaved,
  editingAddress,
}: Props) {
  const router = useRouter();
  const [form, setForm] = useState<AddressForm>(emptyForm);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingAddress) {
      setForm({
        label: editingAddress.label,
        full_name: editingAddress.full_name,
        phone: editingAddress.phone,
        line1: editingAddress.line1,
        line2: editingAddress.line2,
        city: editingAddress.city,
        state: editingAddress.state,
        postal_code: editingAddress.postal_code,
        country: editingAddress.country,
        is_default: editingAddress.is_default,
      });
    } else {
      setForm(emptyForm);
    }
    setMessage("");
  }, [editingAddress, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = "checked" in e.target ? e.target.checked : false;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const token = localStorage.getItem("access");

      if (!token) {
        router.push("/login");
        return;
      }

      const url = editingAddress
        ? `https://en-adukkalai-backend.onrender.com/api/auth/addresses/${editingAddress.id}/`
        : "https://en-adukkalai-backend.onrender.com/api/auth/addresses/";

      const method = editingAddress ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.status === 401) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        router.push("/login");
        return;
      }

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        onSaved();
        onClose();
      } else {
        setMessage(data.error || "Failed to save address.");
      }
    } catch {
      setMessage("Failed to save address.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-headline text-3xl text-[#1c1c16]">
            {editingAddress ? "Edit Address" : "Add Address"}
          </h3>
          <button type="button" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <select
            name="label"
            value={form.label}
            onChange={handleChange}
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          >
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>

          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="line1"
            value={form.line1}
            onChange={handleChange}
            placeholder="House / Street"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="line2"
            value={form.line2}
            onChange={handleChange}
            placeholder="Area / Landmark"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="postal_code"
            value={form.postal_code}
            onChange={handleChange}
            placeholder="Postal Code"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none"
          />

          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="rounded-xl bg-[#ebe8de] px-4 py-3 outline-none md:col-span-2"
          />

          <label className="flex items-center gap-2 text-sm text-[#45483c] md:col-span-2">
            <input
              type="checkbox"
              name="is_default"
              checked={form.is_default}
              onChange={handleChange}
            />
            Set as default address
          </label>

          {message && (
            <p className="rounded-lg bg-[#f7f4e9] px-4 py-3 text-sm text-[#924c00] md:col-span-2">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#3e5219] px-6 py-3 text-white md:col-span-2"
          >
            {loading ? "Saving..." : editingAddress ? "Update Address" : "Save Address"}
          </button>
        </form>
      </div>
    </div>
  );
}