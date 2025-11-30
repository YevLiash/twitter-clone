import {useUser} from '../context/UserContext'

function UserAvatar() {
  const {user} = useUser()
  const firstLetter = user?.username?.charAt(0).toUpperCase()
  return (
    user.avatar ? <img
        src={user.avatar.src}
        alt="user-avatar"
        width="40px"
        height="40px"
      /> :
      <div className="min-w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
        <span>{firstLetter}</span>
      </div>
  )
}

export default UserAvatar