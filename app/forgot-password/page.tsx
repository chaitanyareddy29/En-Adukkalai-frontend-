import { Leaf } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Forgot Password | En Adukkalai",
  description: "Reset your En Adukkalai account password.",
};

export default function ForgotPasswordPage() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-[#fcf9ef] px-6 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-sm">

          <div className="mb-8 flex items-center gap-2">
            <Leaf className="h-6 w-6 text-[#3e5219]" />
            <span className="font-headline text-lg font-semibold text-[#1c1c16]">
              En Adukkalai
            </span>
          </div>

          <h1 className="font-headline text-3xl text-[#1c1c16]">
            Forgot Password
          </h1>

          <p className="mt-2 text-[#45483c]">
            Enter your email address and we will send you a link to reset your password.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#45483c]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl border-none bg-[#ebe8de] px-5 py-4 outline-none focus:ring-2 focus:ring-[#3e5219]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#3e5219] py-4 text-lg font-semibold text-white hover:bg-[#556b2f]"
            >
              Send Reset Link
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#45483c]">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-bold text-[#3e5219] hover:underline"
            >
              Back to Login
            </Link>
          </p>

        </div>
      </main>
    </>
  );
}