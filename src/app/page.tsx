import Navbar from '@/app/components/navbar/page';
export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">Welcome to Remain!</h1>
        <p className="text-gray-700 mb-6 text-center">
          This is your authentication playground.<br />
          Please <span className="font-semibold text-orange-500">Login</span> or <span className="font-semibold text-orange-500">Sign Up</span> to continue.
        </p>
        <div className="flex gap-4">
          <a href="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition">Login</a>
          <a href="/signup" className="bg-white border border-orange-500 text-orange-600 font-bold py-2 px-6 rounded hover:bg-orange-100 transition">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
