import Link from 'next/link'
import {FaXTwitter} from 'react-icons/fa6'

function Logo() {
  return (
    <div className="w-fit flex  px-2 py-2 rounded-full hover:bg-gray-500/30">
      <Link
        href="/"
        className="flex gap-1 sm:flex-col sm:gap-0 justify-center items-center lg:flex-row "
      >
        <div className="p-2">
          <FaXTwitter className=" text-3xl" />
        </div>
        <span className="lg:text-xl">Clone</span>
      </Link>
    </div>
  )
}

export default Logo