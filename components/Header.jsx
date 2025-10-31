import Nav from '../components/Nav.jsx'
import Link from 'next/link'
import {FaXTwitter} from 'react-icons/fa6'
import {BsThreeDots} from 'react-icons/bs'

function Header() {

  return (
    <header className="h-screen py-5 flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div className=" w-fit flex ml-1 px-2 py-2 rounded-full hover:bg-gray-500/30">
          <Link
            href="/"
          >
            <FaXTwitter className="text-3xl  " />
          </Link>
        </div>

        <Nav />

        <button className=" px-4 py-3 font-semibold rounded-full text-gray-900 bg-gray-200 hover:bg-gray-300">Post</button>

      </div>

      <div className="flex items-center gap-8 justify-between rounded-full mt-auto hover:bg-gray-500/30">
        <div className="flex items-center">
          <div className="flex gap-3 p-4">
            <div className="min-w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
              <span>U</span>
            </div>
          </div>

          <div className="flex flex-col ">
            <span>User name</span>
            <span className="text-gray-400">@username</span>
          </div>
        </div>
        <div className="flex mr-4"><BsThreeDots className="text-lg" /></div>
      </div>

    </header>
  )
}

export default Header