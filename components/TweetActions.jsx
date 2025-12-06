import {RiChat3Line} from 'react-icons/ri'
import {LuRepeat2} from 'react-icons/lu'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {IoStatsChart} from 'react-icons/io5'
import {FiBookmark} from 'react-icons/fi'
import {TbShare2} from 'react-icons/tb'
import {useEffect, useState} from 'react'
import {useUser} from '../context/UserContext'
import {useQueryClient} from '@tanstack/react-query'

function TweetActions({tweet}) {
  const {user} = useUser()
  const currentUserId = user?._id
  const [likedUsers, setLikedUsers] = useState(tweet.liked || [])

  const liked = currentUserId ? likedUsers.includes(currentUserId) : false
  const [isLiked, setIsLiked] = useState(false)
  const queryClient = useQueryClient()

  //LIKES
  const handleLike = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!currentUserId) return

    const newLiked = isLiked
      ? likedUsers.filter(id => id !== currentUserId)
      : [...likedUsers, currentUserId]
    setLikedUsers(newLiked)

    queryClient.setQueryData(['tweet', tweet._id], old => ({
      ...old,
      liked: newLiked
    }))

    queryClient.setQueryData(['tweets'], old => {
      if (!old) return old
      return {
        ...old,
        data: old.data.map(t =>
          t._id === tweet._id ? {...t, liked: newLiked} : t
        )
      }
    })

    try {
      const res = await fetch(`http://localhost:3000/api/tweets/${tweet._id}/like`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId: currentUserId})
      })
      if (!res.ok) console.error('Error liking tweet')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    setIsLiked(liked)
  }, [tweet.liked])


  return (
    <ul className=" flex justify-between items-center text-gray-500">
      <li className="hover:text-sky-400 transition">
        <button
          className="flex items-center gap-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('reply button clicked')
          }}
        >
          <div className=" p-1.5 sm:p2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
            <RiChat3Line className="text-xl " />
          </div>
          <span className="text-sm ml-[-4px]">{tweet.reply}</span>
        </button>
      </li>

      <li className="hover:text-green-500 transition">
        <button
          className="flex items-center gap-1 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('repost button clicked')
          }}
        >
          <div className="p-1.5 sm:p2.5 rounded-full group-hover:bg-green-500/10 transition">
            <LuRepeat2 className="text-xl" />
          </div>
          <span className="text-sm ml-[-4px]">{tweet.repost}</span>
        </button>
      </li>

      <li className="hover:text-pink-500 transition">
        <button
          className="flex items-center group cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsLiked(prev => !prev)
            handleLike(e)
          }}
        >
          <div className="p-1.5 sm:p2.5 rounded-full group-hover:bg-pink-500/10  transition">
            {isLiked ? <AiFillHeart className="text-xl" /> :
              <AiOutlineHeart className="text-xl" />}
          </div>
          <span className="text-sm ml-[-4px]">{likedUsers.length === 0 ? null : likedUsers.length}</span>
        </button>
      </li>

      <li className="hover:text-sky-500 transition">
        <button
          className="flex items-center pointer group cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('views button clicked')
          }}
        >
          <div className=" p-1.5 sm:p2.5 rounded-full group-hover:bg-sky-500/10 transition">
            <IoStatsChart className="text-xl" />
          </div>
          <span className="text-sm ml-[-4px] ">{tweet.views}</span>
        </button>
      </li>

      <li className="flex items-center sm:gap-3">
        <button className=" hidden sm:block cursor-pointer">
          <div className=" p-1.5 sm:p2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
            <FiBookmark className="text-xl" />
          </div>
        </button>
        <button className="cursor-pointer">
          <div className=" p-1.5 sm:p2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
            <TbShare2 className="text-xl" />
          </div>
        </button>
      </li>
    </ul>
  )
}

export default TweetActions