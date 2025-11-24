import {BsThreeDots} from 'react-icons/bs'
import {useUser} from '../context/UserContext'
import {useEffect, useRef, useState} from 'react'
import Logout from '../components/Logout'

function UserMenu() {
  const {user, logout} = useUser()
  const [showLogOut, setShowLogOut] = useState(false)
  const logOutRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (logOutRef.current && !logOutRef.current.contains(event.target)) {
        setShowLogOut(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setShowLogOut(false)
  }, [user])

  return (
    <div
      ref={logOutRef}
      className=" group"
    >

      {user && <div
        onClick={() => setShowLogOut(prev => !prev)}
        className="absolute top-0 left-0 sm:static sm:flex sm:flex-col-reverse   "
      >
        <div className="flex justify-center items-center gap-4 group-hover:bg-gray-500/30 rounded-full">
          <div className="flex items-center ">
            <div className="flex gap-3 p-2 sm:p-4">
              <div className="min-w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
                <span>{user?.username?.charAt(0).toUpperCase()}</span>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-col max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap ">
              <span>{user?.username}</span>
              <span className="text-gray-400">@{user?.username?.toLowerCase()}</span>
            </div>
          </div>
          <div className="hidden lg:flex mr-4">
            <BsThreeDots className="text-lg" />
          </div>
        </div>

        {showLogOut && <Logout
          user={user}
          logout={logout}
          showLogOut={showLogOut}
          setShowLogOut={setShowLogOut}
        />}
      </div>}


    </div>)
}

export default UserMenu