import Nav from '../components/Nav.jsx'
import Link from 'next/link'
import {FaXTwitter} from 'react-icons/fa6'
import {BsThreeDots} from 'react-icons/bs'
import {FaFeatherAlt} from 'react-icons/fa'

function Header() {

  return (
    <header className="sticky top-0 sm:h-screen py-2 sm:py-5 flex flex-col justify-between items-center">
      <div className="flex sm:flex-col gap-3">
        <div className="w-fit flex px-2 py-2 rounded-full hover:bg-gray-500/30">
          <Link
            href="/"
          >
            <FaXTwitter className="text-3xl  " />
          </Link>
        </div>

        <Nav />

        <button className=" hidden sm:flex items-center w-fit xl:w-auto justify-center p-3 h-fit font-semibold rounded-full text-gray-900 bg-gray-200 hover:bg-gray-300">
          <span className="hidden xl:block">
            Post
          </span>
          <FaFeatherAlt className="inline-block text-2xl w-fit xl:hidden" />
        </button>
      </div>

      <div className=" absolute top-0 left-0 sm:static sm:flex sm:items-center gap-8 justify-between rounded-full hover:bg-gray-500/30">
        <div className="flex items-center">
          <div className="flex gap-3 p-3 sm:p-4">
            <div className="min-w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
              <span>U</span>
            </div>
          </div>

          <div className="hidden xl:flex xl:flex-col ">
            <span>User name</span>
            <span className="text-gray-400">@username</span>
          </div>
        </div>
        <div className="hidden xl:flex mr-4"><BsThreeDots className="text-lg" />
        </div>
      </div>

    </header>
  )
}

export default Header