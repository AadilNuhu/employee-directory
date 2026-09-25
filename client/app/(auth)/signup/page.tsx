"use client";

import api from "@/lib/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sucess, setSucess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSucess("");

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");

      setTimeout(() => {
        setError("");
      }, 2000);

      return;
    }

    try {
      const res = await api.post("auth/register", {
        name,
        email,
        password,
      });

      setSucess("Account Created Successfully");

      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch (error: any) {
      console.error(error);

      // Account already exists
      if (error.response?.status === 409) {
        setError("An account with this email already exists.");

        setTimeout(() => {
          setError("");
        }, 3000);

        return;
      }

      // Other errors
      setError("An error occurred. Please try again.");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-gray-900">
            Create Account
          </h1>
        </div>

        {/* Success Message */}
        {sucess && (
          <p className="text-green-600 bg-green-700/10 text-center py-2 rounded-md">
            {sucess}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-600 bg-red-700/10 text-center rounded-md">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-3">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Signup button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-600 font-medium hover:text-green-700"
          >
            Login
          </a>
        </p>

      </div>
    </main>
  );
}