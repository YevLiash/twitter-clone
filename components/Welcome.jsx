import Link from 'next/link'
import {FaXTwitter} from 'react-icons/fa6'

function Welcome() {
  return (
    <main className="flex flex-col gap-6 items-center justify-center h-screen text-white">
      <div className="flex">
        <h1 className="flex gap-3 items-center text-3xl lg:text-5xl font-bold">Welcome to <FaXTwitter className="text-3xl lg:text-5xl" /> clone
        </h1>

      </div>
      <p className="text-2xl ">Do you have an account?</p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="text-gray-900 bg-gray-200 hover:bg-gray-300 px-7 py-3 rounded-full font-semibold"
        >
          Log in
        </Link>

        <Link
          href="/register"
          className=" text-gray-200 border border-gray-200 hover:bg-gray-200/10 transition px-7 py-3 rounded-full font-semibold"
        >
          Sign up
        </Link>
      </div>
    </main>
  )
}

export default Welcome