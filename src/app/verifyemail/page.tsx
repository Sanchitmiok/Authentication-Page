"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function VerifyEmailPage() {
  const [token, settoken] = useState("")
  const [verified, setverified] = useState(false)
  const [error, setError] = useState(false)

  const verifyUserEmail = async () => {
    try {
      let resp = await axios.post("/api/users/verify", { token })
      if (resp.status === 200) {
        setverified(true)
        setError(false)
      }
    } catch (error: any) {
      setError(true)
      console.log(error.message)
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    settoken(urlToken || "");
    setError(false)
  }, [])

  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center w-full max-w-md">
        <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-orange-600">Verify Email</h1>
        <div className="p-2 bg-orange-100 text-orange-700 rounded mb-4 w-full text-center font-mono overflow-hidden">
          {token ? `Token: ${token}` : "No token found in URL"}
        </div>
        {!verified && !error && (
          <div className="w-full text-center mb-4">
            <h2 className="text-lg text-gray-700 mb-2">
              Please check your email inbox for a verification link.
            </h2>
            <p className="text-sm text-orange-500 font-semibold">
              Don&apos;t forget to check your <span className="underline">Spam</span> or <span className="underline">Junk</span> folder!
            </p>
          </div>
        )}
        {verified && (
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Email Verified!</h2>
            <Link href="/login" className="text-orange-600 hover:underline font-medium">
              Go to Login
            </Link>
          </div>
        )}
        {error && (
          <div className="w-full text-center">
            <h2 className="text-2xl bg-red-500 text-white rounded p-2 mb-2">Verification Failed</h2>
            <p className="text-gray-600">Please check your link or try again.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VerifyEmailPage
