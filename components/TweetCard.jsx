'use client'

import {LuRepeat2} from 'react-icons/lu'
import {RiChat3Line} from 'react-icons/ri'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {useState} from 'react'
import {IoStatsChart} from 'react-icons/io5'
import {FiBookmark} from 'react-icons/fi'
import {TbShare2} from 'react-icons/tb'

function TweetCard({tweet}) {
  const [isLiked, setIsLiked] = useState(false)


  return (
    <div className="p-4 border-b border-b-gray-700 flex gap-3">
      {tweet.avatar ? <img
          src={tweet.avatar}
          alt="user-avatar"
          width="32px"
          height="32px"
        /> :
        <div className="min-w-8 h-8 bg-purple-900 rounded-full flex justify-center items-center ">
          <span>U</span>
        </div>}

      <div>
        <div className="mb-3">
          <p>{tweet.userId}</p>
          <h2>{tweet.title}</h2>
          <p>{tweet.body}</p>
        </div>
        <ul className="flex justify-between items-center text-gray-500">
          <li className="pointer hover:text-sky-400 transition">
            <button
              className="flex items-center gap-1"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('reply button clicked')
              }}
            >
              <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
                <RiChat3Line className="text-xl " />
              </div>
              <span className="text-sm ml-[-4px]">{tweet.reply}</span>
            </button>
          </li>

          <li className="pointer hover:text-green-500 transition">
            <button
              className="flex items-center gap-1"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('repost button clicked')
              }}
            >
              <div className="p-2.5 rounded-full hover:bg-green-500/10 transition">
                <LuRepeat2 className="text-xl" />
              </div>
              <span className="text-sm ml-[-4px]">{tweet.repost}</span>
            </button>
          </li>

          <li className="pointer hover:text-pink-500 transition">
            <button
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsLiked(!isLiked)
              }}
            >
              <div className="p-2.5 rounded-full hover:bg-pink-500/10  transition">
                {isLiked ? <AiFillHeart className="text-xl" /> :
                  <AiOutlineHeart className="text-xl" />}
              </div>
              <span className="text-sm ml-[-4px]">{tweet.reactions.likes}</span>
            </button>
          </li>

          <li className="pointer hover:text-sky-500 transition">
            <button
              className="flex items-center pointer"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('views button clicked')
              }}
            >
              <div className=" p-2.5 rounded-full hover:bg-sky-500/10 transition">
                <IoStatsChart className="text-xl" />
              </div>
              <span className="text-sm ml-[-4px] ">{tweet.views}</span>
            </button>
          </li>

          <li className="flex items-center gap-3">
            <button className="pointer">
              <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
                <FiBookmark className="text-xl" />
              </div>
            </button>
            <button className="pointer">
              <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
                <TbShare2 className="text-xl" />
              </div>
            </button>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default TweetCard