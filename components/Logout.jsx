function Logout({user, logout, showLogOut, setShowLogOut}) {
  return (
    <>
      {showLogOut && (
        <div className="absolute left-0 sm:bottom-20 border border-gray-700 font-bold text-white bg-[#0a0a0a] rounded-lg shadow-sm shadow-white/50 z-50">
          <button
            className="w-full text-left px-4 py-2 cursor-pointer"
            onClick={() => {
              logout()
              setShowLogOut(false)
            }}
          >
            Logout @{user.username}
          </button>
        </div>)}
    </>)
}

export default Logout