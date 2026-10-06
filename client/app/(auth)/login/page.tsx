"use client";

import { useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSucess] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      })
      localStorage.setItem("token", res.data.token);
      setSucess("Login Successfull. Redirecting ...")

      setTimeout(() => {
        setSucess("")
        router.push("/")
      }, 3000);

    } catch (error: any) {
      if (error.response?.status === 401) {
        setError("Invalid Credentials")
      }
      // setError("An Error Occured")
      setTimeout(() => {
        setError("")
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <p className="text-green-600 bg-green-700/10 text-center py-2 rounded-md">
            {success}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-600 bg-red-700/10 text-center rounded-md">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-green-600 hover:text-green-700"
            >
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-600 font-medium hover:text-green-700"
          >
            Create account
          </a>
        </p>

      </div>
    </main>
  );
}