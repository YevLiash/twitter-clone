import Nav from '../components/Nav.jsx'
import Link from 'next/link'
import {FaXTwitter} from 'react-icons/fa6'

function Header() {

  return (
    <header className="mt-5">
      <div className=" w-fit flex ml-1 px-2 py-2 rounded-full hover:bg-gray-500/30">
        <Link
          href="/"
        >
          <FaXTwitter className="text-3xl  " />
        </Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header