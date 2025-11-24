import Nav from '../components/Nav.jsx'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'

function Header() {
  return (
    <header className="sticky top-0 sm:h-screen py-2 sm:py-5 flex flex-col justify-between items-center lg:items-start lg:mr-4 ">
      <div className="flex justify-center items-center lg:items-start lg:w-full  sm:flex-col  gap-3">
        <Logo />
        <Nav />
      </div>
      <UserMenu />
    </header>
  )
}

export default Header