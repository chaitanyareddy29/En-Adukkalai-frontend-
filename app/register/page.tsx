"use client";

import { Leaf, Menu, ShoppingCart, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://en-adukkalai-backend.onrender.com/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email,
          password,
          newsletter,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Account created successfully. Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 1200);
      } else {
        if (data.username?.[0]) {
          setMessage(data.username[0]);
        } else if (data.email?.[0]) {
          setMessage(data.email[0]);
        } else if (data.password?.[0]) {
          setMessage(data.password[0]);
        } else if (data.detail) {
          setMessage(data.detail);
        } else {
          setMessage("Registration failed.");
        }
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-[rgba(252,249,239,0.8)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Menu className="h-6 w-6 text-[#3e5219]" />
            <span className="font-headline text-2xl font-semibold tracking-tight text-[#3e5219]">
              En Adukkalai
            </span>
          </div>

          <div className="flex items-center gap-4">
            <ShoppingCart className="h-6 w-6 text-[#45483c]" />
          </div>
        </div>
      </header>

      <main className="flex min-h-screen items-center justify-center px-4 pb-12 pt-24">
        <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-sm lg:grid-cols-2">
          <div className="relative hidden min-h-[600px] overflow-hidden bg-[#556b2f] lg:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADBpuYU4MpDY7NCBStUfanj007AEz895_jrs854zRjbHlWSTHQQA9f4JuDgutOkvlaOKT1xYwKi5ShgGPw-azYhekU7Ixj8yMVOxEf6MSqehTt7qw6KI4CLUAbAaploxA6IcOjBznN4b-xF3A2IA0hk-I9DZ21NCwrkkMgDuIcqQnKNu-nzduTpgl3ofI3U-DzauEpzBiabSStUOmTC-hE4kh_-TiKaCpS7twHb3i3lNSxuxYNbJqmwY3cKhS907OTyVXLd-8IJZw"
              alt="Modern organic kitchen with sustainable wooden utensils"
              className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3e5219]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <h2 className="mb-6 font-headline text-5xl italic leading-tight">
                Rooted in Earth,
                <br />
                Crafted for Home.
              </h2>
              <p className="max-w-sm text-lg leading-relaxed opacity-90">
                Join a community dedicated to sustainable living and the timeless
                art of the organic kitchen.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="rounded-sm bg-[#74613c]/30 px-4 py-2 text-sm font-medium backdrop-blur-md">
                  Plastic Free
                </div>
                <div className="rounded-sm bg-[#74613c]/30 px-4 py-2 text-sm font-medium backdrop-blur-md">
                  Sourced in India
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="mb-10">
              <h1 className="mb-2 font-headline text-4xl text-[#3e5219]">
                Create Account
              </h1>
              <p className="text-[#45483c]">
                Begin your journey toward a conscious kitchen.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block px-1 text-sm font-medium text-[#45483c]"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Arjun Sharma"
                    className="w-full rounded-lg border-none bg-[#ebe8de] p-4 text-[#1c1c16] outline-none transition-all placeholder:text-[#c5c8b8] focus:ring-2 focus:ring-[#3e5219]"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block px-1 text-sm font-medium text-[#45483c]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="arjun@example.com"
                    className="w-full rounded-lg border-none bg-[#ebe8de] p-4 text-[#1c1c16] outline-none transition-all placeholder:text-[#c5c8b8] focus:ring-2 focus:ring-[#3e5219]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block px-1 text-sm font-medium text-[#45483c]"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-lg border-none bg-[#ebe8de] p-4 text-[#1c1c16] outline-none transition-all placeholder:text-[#c5c8b8] focus:ring-2 focus:ring-[#3e5219]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="confirm-password"
                      className="block px-1 text-sm font-medium text-[#45483c]"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-lg border-none bg-[#ebe8de] p-4 text-[#1c1c16] outline-none transition-all placeholder:text-[#c5c8b8] focus:ring-2 focus:ring-[#3e5219]"
                    />
                  </div>
                </div>

                <div className="mt-2 flex items-start gap-3">
                  <div className="flex h-5 items-center">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="h-5 w-5 rounded border-[#c5c8b8] bg-[#ebe8de] text-[#3e5219] focus:ring-[#3e5219]"
                    />
                  </div>
                  <label
                    htmlFor="newsletter"
                    className="text-sm leading-snug text-[#45483c]"
                  >
                    Subscribe to newsletter for sustainable living tips
                  </label>
                </div>
              </div>

              {message && (
                <p className="rounded-lg bg-[#f7f4e9] px-4 py-3 text-sm text-[#3e5219]">
                  {message}
                </p>
              )}

              <div className="space-y-6 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#3e5219] py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#556b2f] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>

                <div className="text-center">
                  <p className="text-sm text-[#45483c]">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-bold text-[#3e5219] hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>

            <div className="mt-12 border-t border-[#c5c8b8]/20 pt-8">
              <div className="flex items-center justify-between opacity-60">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Ethically Sourced
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Plastic-Free Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center opacity-40">
        <p className="font-headline text-sm italic">
          © 2024 En Adukkalai. Curated Earth-Friendly Essentials.
        </p>
      </footer>
    </>
  );
}