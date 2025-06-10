"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <div className="text-2xl font-bold text-orange-600 tracking-wide">
        Remain
      </div>
      <div className="flex gap-6">
        <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition">Home</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-orange-600 font-medium transition">Dashboard</Link>
        <Link href="/profile" className="text-gray-700 hover:text-orange-600 font-medium transition">Profile</Link>
        <Link href="/login" className="text-gray-700 hover:text-orange-600 font-medium transition">Login</Link>
        <Link href="/signup" className="text-gray-700 hover:text-orange-600 font-medium transition">Sign Up</Link>
      </div>
    </nav>
  );
}