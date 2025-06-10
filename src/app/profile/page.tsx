"use client"
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


function ProfilePage() {
    const router = useRouter()
    const [data, setdata] = useState("Nothing")
    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success('Logout successful')
            router.push("/")
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.post("/api/users/me")
        // console.log(res)
        // console.log(res.data.data._id);
        setdata(res.data.data.username)
        // console.log(data)

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
            <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center w-full max-w-md">
                <div className="bg-orange-500 rounded-full w-24 h-24 flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold mb-2 text-orange-600">Profile</h1>
                <p className="text-gray-700 mb-4">Welcome to your profile page!</p>
                <h2 className="p-2 rounded bg-green-500 text-white w-full text-center mb-4">
                    {data === "Nothing" ? "No user data" : <Link href={`/profile/${data}`} className="underline">Go to your public profile</Link>}
                </h2>
                <div className="flex gap-4 w-full">
                    <button
                        onClick={logout}
                        className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                    >
                        Logout
                    </button>
                    <button
                        onClick={getUserDetails}
                        className="flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition"
                    >
                        Get User Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
