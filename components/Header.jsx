import Nav from '../components/Nav.jsx'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'
import {useEffect, useState} from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 5)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`sticky top-0 sm:h-screen py-1 sm:py-5 flex flex-col justify-between items-center lg:items-start lg:mr-4 ${scrolled ? 'bg-[#0a0a0a]/95 ' : 'bg-[#0a0a0a]'}`}>
      <div className="flex justify-center items-center lg:items-start lg:w-full sm:flex-col gap-3">
        <Logo />
        <Nav scrolled={scrolled} />
      </div>
      <UserMenu />
    </header>
  )
}

export default Header