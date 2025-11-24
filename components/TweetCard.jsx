'use client'

import {LuRepeat2} from 'react-icons/lu'
import {RiChat3Line} from 'react-icons/ri'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {useState} from 'react'
import {IoStatsChart} from 'react-icons/io5'
import {FiBookmark} from 'react-icons/fi'
import {TbShare2} from 'react-icons/tb'
import {BsDot, BsFillPatchCheckFill} from 'react-icons/bs'

function TweetCard({tweet}) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="p-2 sm:p-4 border-b sm:border-x  border-gray-700 flex gap-1.5 sm:gap-3">
      {tweet.avatar ? <img
          src={tweet.avatar}
          alt="user-avatar"
          width="40px"
          height="40px"
        /> :
        <div className="min-w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
          <span>U</span>
        </div>}

      <div className="w-full flex flex-col gap-2 sm:gap-3">
        <div>
          <div className="flex items-center gap-1 mb-2 sm:mb-3">
            <p>User {tweet.userId}</p>
            <BsFillPatchCheckFill className="text-blue-500" />
            <p className="text-gray-400">@user{tweet.userId}</p>
            <BsDot className="text-sm inline text-gray-500" />
            <span className="text-gray-500">2h</span>
          </div>
          <p>{tweet.content}</p>
        </div>

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
                setIsLiked(!isLiked)
              }}
            >
              <div className="p-1.5 sm:p2.5 rounded-full group-hover:bg-pink-500/10  transition">
                {isLiked ? <AiFillHeart className="text-xl" /> :
                  <AiOutlineHeart className="text-xl" />}
              </div>
              <span className="text-sm ml-[-4px]">{tweet.reactions?.likes}</span>
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
      </div>
    </div>
  )
}

export default TweetCard