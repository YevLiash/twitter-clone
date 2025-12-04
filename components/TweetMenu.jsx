import {useEffect, useRef} from 'react'
import {BsThreeDots} from 'react-icons/bs'

function TweetMenu({tweet, refetchTweets, setShowTweetMenu, showTweetMenu}) {

  const TweetMenuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (TweetMenuRef.current && !TweetMenuRef.current.contains(event.target)) {
        setShowTweetMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setShowTweetMenu(false)
  }, [])

  //DELETE
  async function handleDeleteTweet(tweetId) {
    console.log('delete')
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
      refetchTweets()
    } catch (error) {
      console.error('Error deleting tweet:', error)
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
        className="absolute mt-2 right-[-4px] border max-w-25 border-gray-700 font-bold text-white bg-[#0a0a0a]  rounded-lg shadow-sm shadow-white/50 z-50"
      >
        <button
          className="w-full font-normal text-left px-4 py-1 cursor-pointer text-gray-400 hover:text-white"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('EDIT tweet')
            setShowTweetMenu(false)
          }}
        >
          Edit
        </button>
        <button
          className="w-full font-normal text-left px-4 py-1 cursor-pointer text-red-500/70 hover:text-red-500"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleDeleteTweet(tweet._id)
            setShowTweetMenu(false)
          }}
        >
          Delete
        </button>
      </div>}

    </div>
  )
}

export default TweetMenu
