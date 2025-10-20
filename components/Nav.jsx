import {IoHome} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'
import {GoBell} from 'react-icons/go'
import {MdOutlineMail} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa'
import Link from 'next/link'

function Nav() {
  const navlinks = [{icon: <IoHome />, name: 'home'},
    {icon: <IoIosSearch />, name: 'explore'},
    {icon: <GoBell />, name: 'notifications'},
    {icon: <MdOutlineMail />, name: 'messages'},
    {icon: <FaRegUser />, name: 'profile'}]

  return (<ul className="flex flex-col gap-4">
    {navlinks.map(link => {
      return <li
        key={link.name}

      >
        <Link href={`/${link.name}`} className="flex items-center gap-2">
          <span className="text-2xl">{link.icon}</span>
          <p className="text-lg capitalize">{link.name}</p>
        </Link>

      </li>
    })}
  </ul>)
}

export default Nav