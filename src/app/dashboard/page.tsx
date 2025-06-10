"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear cookies, call API, etc.)
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 text-black">
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">Dashboard</h1>
        <div className="mb-6 w-full">
          <div className="bg-orange-100 rounded-lg p-4 mb-2">
            <span className="font-semibold text-gray-700">Random Fact:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="bg-orange-100 rounded-lg p-4 mb-2">
            <span className="font-semibold text-gray-700">Your Score:</span> 42
          </div>
          <div className="bg-orange-100 rounded-lg p-4">
            <span className="font-semibold text-gray-700">Status:</span> Active
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <Link
            href="/profile"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-center transition"
          >
            Go to Profile
          </Link>
          <button
            onClick={handleLogout}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}