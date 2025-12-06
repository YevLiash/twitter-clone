'use client'

function DeleteTweetModal({onDelete, setShowDeleteModal}) {
  
  return (
    <div
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowDeleteModal(false)
      }}

      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black border border-gray-700 w-[90%] sm:w-[300px] rounded-2xl p-3 sm:p-5 flex flex-col gap-5 animate-fadeIn pointer-events-auto"
      >
        <div className="relative flex flex-col items center justfy-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setShowDeleteModal(false)
            }}
            className="absolute top-[-8px] right-[-8px] text-gray-400 hover:text-white text-md px-2"
          >
            ✕
          </button>
          <span className="mx-auto text-center w-[75%] font-semibold text-lg">Are you sure you want to delete this tweet?</span>


          <ul className="flex items-center justify-center  gap-4">
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setShowDeleteModal(false)
                }}
                className="px-3 sm:px-4 py-1 sm:py-1.5 font-semibold rounded-full text-gray-900 bg-gray-400 hover:bg-gray-300"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onDelete()
                }}
                className="px-3 sm:px-4 py-1 sm:py-1.5 font-semibold rounded-full text-white bg-red-500/70 hover:bg-red-500/90"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>

        <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      </div>
    </div>
  )
}

export default DeleteTweetModal