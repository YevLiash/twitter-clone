import {useEffect, useRef, useState} from 'react'
import {BsThreeDots} from 'react-icons/bs'
import EditTweetModal from '../components/EditTweetModal'
import DeleteTweetModal from '../components/DeleteTweetModal'
import {useRouter} from 'next/navigation'
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa'

function TweetMenu({tweet, refetchTweets}) {

  const TweetMenuRef = useRef(null)
  const [showTweetMenu, setShowTweetMenu] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const router = useRouter()


  useEffect(() => {
    function handleClickOutside(e) {
      if (TweetMenuRef.current && !TweetMenuRef.current.contains(e.target)) {
        setShowTweetMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  //DELETE
  async function handleDeleteTweet(tweetId) {
    if (!tweetId) return

    try {
      const res = await fetch(`http://localhost:3000/api/tweets/${tweetId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: tweetId})
      })

      const data = await res.json()

      if (!res.ok) {
        console.error('Error deleting tweet:', data.error)
        return
      }

      console.log('Tweet deleted successfully:', data)

      if (refetchTweets) {
        refetchTweets()
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error('Error deleting tweet:', error)
    }
  }

  // EDIT
  async function handleEditTweet(tweetId, newContent) {
    if (!tweetId || !newContent) return

    try {
      const res = await fetch(`http://localhost:3000/api/tweets/${tweetId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content: newContent})
      })

      const data = await res.json()

      if (!res.ok) {
        console.error('Error editing tweet:', data.error)
        return
      }

      console.log('Tweet updated successfully:', data)
      if (refetchTweets) {
        refetchTweets()
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error('Error editing tweet:', error)
    }
  }


  return (
    <div className="relative">
      <button
        className="flex cursor-pointer outline-none p-2 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowTweetMenu(prev => !prev)
        }}
      >
        <BsThreeDots className="text-sm" />
      </button>

      {showTweetMenu && <div
        ref={TweetMenuRef}
        className="absolute right-[-4px] border max-w-25 border-gray-700 font-bold text-white bg-[#0a0a0a]  rounded-lg shadow-sm shadow-white/50 z-50"
      >
        <button
          className="w-full flex items-center gap-2 font-normal text-left px-4 py-1 cursor-pointer text-gray-400 hover:text-white"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('EDIT tweet')
            setShowEditModal(true)
            setShowTweetMenu(false)
          }}
        >
          <FaRegEdit />
          Edit
        </button>
        <button
          className="w-full flex items-center gap-2 font-normal text-left px-4 py-1 cursor-pointer text-red-500/70 hover:text-red-500/90"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setShowDeleteModal(true)
            setShowTweetMenu(false)
          }}
        >
          <FaRegTrashAlt />
          Delete
        </button>
      </div>}

      {showDeleteModal &&
        <DeleteTweetModal
          onDelete={() => handleDeleteTweet(tweet._id)}
          setShowDeleteModal={setShowDeleteModal}
        />}

      {showEditModal && <EditTweetModal
        tweet={tweet}
        onEdit={(tweetId, newContent) => handleEditTweet(tweetId, newContent)}
        setShowEditModal={setShowEditModal}
      />}
    </div>
  )
}

export default TweetMenu
