"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function SignupPage() {
  const router = useRouter();
  const [user, setuser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setbuttonDisabled] = React.useState(false)
  const [loading, setloading] = React.useState(false)

  const onSignup = async () => {
    try {
      setloading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Signup Success");
      router.push("/verifyemail");
    } catch (error:any) {
      toast.error(error.response?.data?.error || error.message)
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setbuttonDisabled(false)
    } else {
      setbuttonDisabled(true)
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center w-full max-w-md">
        <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-orange-600">{loading ? "Processing..." : "Sign Up"}</h1>
        <hr className="w-full mb-4" />
        <label htmlFor="username" className="self-start mb-1 text-gray-700 font-medium">Username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-orange-500 text-black"
          id="username"
          value={user.username}
          onChange={(e) => setuser({ ...user, username: e.target.value })}
          placeholder="Username"
          type="text"
        />
        <label htmlFor="email" className="self-start mb-1 text-gray-700 font-medium">Email</label>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-orange-500 text-black"
          placeholder="Email"
          id="email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        />
        <label htmlFor="Password" className="self-start mb-1 text-gray-700 font-medium">Password</label>
        <input
          type="Password"
          className="p-2 border border-gray-300 rounded-lg mb-6 w-full focus:outline-none focus:border-orange-500 text-black"
          placeholder="Password"
          id="Password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <button
          onClick={onSignup}
          disabled={buttonDisabled || loading}
          className={`w-full p-2 rounded-lg font-semibold transition mb-4
            ${buttonDisabled || loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
            }`}
        >
          {buttonDisabled ? "Please fill all fields" : loading ? "Signing up..." : "Submit details"}
        </button>
        <Link href="/login" className="text-orange-600 hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </div>
  )
}
