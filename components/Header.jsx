import {FaXTwitter} from 'react-icons/fa6'
import Nav from '../components/Nav.jsx'

function Header() {

  return (
    <header>
      <FaXTwitter className="text-3xl mb-8" />
      <Nav />
    </header>
  )
}

export default Header