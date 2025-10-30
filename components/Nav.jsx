'use client'

import {GoBell, GoBellFill, GoHome, GoHomeFill} from 'react-icons/go'

import {FaRegUser, FaUser} from 'react-icons/fa6'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CiSearch} from 'react-icons/ci'
import {IoSearch} from 'react-icons/io5'
import {TbMail, TbMailFilled} from 'react-icons/tb'


function Nav() {
  const navlinks = [{
    icon: <GoHome />,
    activeIcon: <GoHomeFill />,
    name: 'home',
    href: '/'
  },
    {
      icon: <CiSearch />,
      activeIcon: <IoSearch />,
      name: 'explore',
      href: '/explore'
    },
    {
      icon: <GoBell />,
      activeIcon: <GoBellFill />,
      name: 'notifications',
      href: '/notifications'
    },
    {
      icon: <TbMail />,
      activeIcon: <TbMailFilled />,
      name: 'messages',
      href: '/messages'
    },
    {
      icon: <FaRegUser />,
      activeIcon: <FaUser />,
      name: 'profile',
      href: '/profile'
    }]

  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex flex-col gap-1">
        {navlinks.map(link => {
          return <li
            key={link.name}
          >
            <Link
              href={link.href}
              className={`w-fit flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-500/30 ${pathname === link.href ? 'font-bold text-white' : 'text-gray-300'}`}
            >
              <span className="text-3xl ">{pathname === link.href ? link.activeIcon : link.icon}</span>
              <p className="text-xl capitalize">{link.name}</p>
            </Link>
          </li>
        })}
      </ul>
    </nav>)
}

export default Nav