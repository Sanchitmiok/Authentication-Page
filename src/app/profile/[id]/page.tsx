import Link from 'next/link'
import React from 'react'

function ProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center w-full max-w-sm">
        <div className="bg-orange-500 rounded-full w-24 h-24 flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-orange-600">Profile</h1>
        <p className="text-gray-700 mb-4">Welcome, your profile username is:</p>
        <span className="p-2 px-4 rounded bg-orange-500 text-white text-lg font-mono tracking-wider">{params.id}</span>
        <Link href={`/profile`} className="mt-4 text-blue-500 hover:underline">Go to Profile</Link>
      </div>
    </div>
  )
}

export default ProfilePage
