'use client'

import {GoBell, GoBellFill, GoHome, GoHomeFill} from 'react-icons/go'
import {FaRegUser, FaUser} from 'react-icons/fa6'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CiSearch} from 'react-icons/ci'
import {IoSearch} from 'react-icons/io5'
import {TbMail, TbMailFilled} from 'react-icons/tb'


function Nav({scrolled}) {
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
      <ul className={`${scrolled ? 'bg-[#0a0a0a]/95' : 'bg-[#0a0a0a]'} py-2  border-t-gray-600/30 fixed  bottom-0 left-0 flex justify-around items-center  w-full sm:static sm:flex sm:flex-col sm:gap-1 lg:items-start lg:min-w-[182px]`}>
        {navlinks.map(link => {
          return <li
            key={link.name}
          >
            <Link
              href={link.href}
              className={`w-fit flex items-center gap-3 px-3 py-3 xl:py-2 rounded-full hover:bg-gray-500/30 ${pathname === link.href ? 'font-bold text-white' : 'text-gray-300'}`}
            >
              <span className="text-2xl ">{pathname === link.href ? link.activeIcon : link.icon}</span>
              <p className="hidden lg:block text-xl capitalize">{link.name}</p>
            </Link>
          </li>
        })}
        
      </ul>
    </nav>)
}

export default Nav