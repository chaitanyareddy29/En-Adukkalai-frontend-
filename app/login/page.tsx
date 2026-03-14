"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://en-adukkalai-backend.onrender.com/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));
        setMessage("Login successful!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        if (data.error === "User not found") {
          setMessage("User not found. Redirecting to registration...");

          setTimeout(() => {
            router.push("/register");
          }, 1500);
        } else if (data.error === "Invalid password") {
          setMessage("Incorrect password.");
        } else {
          setMessage(data.error || "Login failed.");
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
      <main className="flex min-h-screen flex-grow items-center justify-center px-6 py-12">
        <div className="editorial-shadow grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-2">
          <div className="relative hidden min-h-[600px] overflow-hidden bg-[#556b2f] lg:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwR4fSco1ZniYm0JIl36TcRoYcq29jmkkrswHf1SpQLb96mp1NuoRkQQfaethRsfh_W4jgLBduFfncvvipRhNFpWKCoAAwYKNAemgBJ9nZPCI5rHHYlcQddrQIqy0--fv9X1Qm2qp3Imvf_XIlHzwVSkUMtpgxZSEF_v16QRBV3bYHTEPm78O9mJSOROdebN1vgQINATxxVfPAedcJuxJ6x0EtWF6VhGYfdakefDXWYVumMeGIRdGK07xNOyq6VHSNx1EqK8GYnxw"
              alt="Rustic organic kitchen with wooden utensils and herbs"
              className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3e5219]/80 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h2 className="mb-4 font-headline text-5xl leading-tight">
                Authentic Kitchen,
                <br />
                Timeless Traditions.
              </h2>
              <p className="max-w-sm text-lg opacity-90">
                Welcome back to En Adukkalai. Your sanctuary for curated
                sustainable kitchenware and heritage recipes.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 lg:p-16">
            <div className="mb-12">
              <div className="mb-8 flex items-center gap-2">
                <Leaf className="h-7 w-7 text-[#3e5219]" />
                <span className="font-headline text-xl font-semibold tracking-tight text-[#1c1c16]">
                  En Adukkalai
                </span>
              </div>

              <h1 className="mb-2 font-headline text-4xl text-[#1c1c16]">
                Login
              </h1>
              <p className="text-[#45483c]">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block px-1 text-sm font-medium text-[#45483c]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border-none bg-[#ebe8de] px-5 py-4 text-[#1c1c16] outline-none transition-all placeholder:text-[#45483c]/50 focus:ring-2 focus:ring-[#3e5219]/20"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between px-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#45483c]"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#3e5219] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border-none bg-[#ebe8de] px-5 py-4 text-[#1c1c16] outline-none transition-all placeholder:text-[#45483c]/50 focus:ring-2 focus:ring-[#3e5219]/20"
                />
              </div>

              {message && (
                <p className="rounded-lg bg-[#f7f4e9] px-4 py-3 text-sm text-[#3e5219]">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#3e5219] py-4 text-lg font-bold text-white shadow-lg shadow-[#3e5219]/10 transition-colors hover:bg-[#556b2f] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#c5c8b8]/30" />
              </div>
              <div className="relative flex justify-center text-sm uppercase">
                <span className="bg-white px-4 text-xs tracking-widest text-[#45483c]">
                  Or
                </span>
              </div>
            </div>

            <p className="mt-10 text-center text-[#45483c]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-[#3e5219] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 text-center">
        <p className="text-xs tracking-wider text-[#45483c]/60">
          © 2024 EN ADUKKALAI. HANDCRAFTED HERITAGE.
        </p>
      </footer>
    </>
  );
}