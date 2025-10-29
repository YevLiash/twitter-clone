'use client'

import {RiChat3Line} from 'react-icons/ri'
import {LuRepeat2} from 'react-icons/lu'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {TbShare2} from 'react-icons/tb'
import {useState} from 'react'
import {BsDot, BsFillPatchCheckFill} from 'react-icons/bs'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {IoIosMore} from 'react-icons/io'
import Link from 'next/link'

function SingleTweet({tweet}) {
  const [isLiked, setIsLiked] = useState(false)
  const [reply, setReply] = useState('')


  return (
    <div className="p-4 border-x border-b border-gray-700 flex flex-col gap-4">
      <div>
        <Link
          href={'/'}
          className="flex gap-8 items-center"
        >
          <FaArrowLeftLong />
          <span className="font-bold text-lg">Post</span>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2  items-center">
          {tweet.avatar ? <img
              src={tweet.avatar}
              alt="user-avatar"
              width="40px"
              height="40px"
            /> :
            <div className="w-10 h-10 bg-purple-900 rounded-full flex justify-center items-center ">
              <span>U</span>
            </div>}
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-white">User {tweet.userId}</span>
              <BsFillPatchCheckFill className="text-blue-500" />
            </div>
            <p className="text-gray-400">@user{tweet.userId}</p>
          </div>
        </div>

        <div className="flex  gap-2 items-center">
          <button className="px-4 py-1.5 font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-300">Subscribe</button>
          <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
            <IoIosMore className="text-xl" />
          </div>
        </div>
      </div>


      <div>
        <h2>{tweet.title}</h2>
        <p>{tweet.body}</p>
      </div>

      <div className="text-gray-500 flex gap-1 items-center">
        <p>Time{<BsDot className="text-sm inline" />}
          <span className="text-white font-bold">{tweet.views}</span> Views
        </p>
      </div>

      <ul className="py-1 flex justify-between items-center text-gray-500 border-b border-b-gray-700 border-t border-t-gray-700">
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
            className="flex items-center gap-1 group"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('repost button clicked')
            }}
          >
            <div className="p-2.5 rounded-full group-hover:bg-green-500/10 transition">
              <LuRepeat2 className="text-xl" />
            </div>
            <span className="text-sm ml-[-4px]">{tweet.repost}</span>
          </button>
        </li>

        <li className="pointer hover:text-pink-500 transition">
          <button
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
          >
            <div className="p-2.5 rounded-full group-hover:bg-pink-500/10  transition">
              {isLiked ? <AiFillHeart className="text-xl" /> :
                <AiOutlineHeart className="text-xl" />}
            </div>
            <span className="text-sm ml-[-4px]">{tweet.reactions.likes}</span>
          </button>
        </li>

        <li className="pointer">
          <button className="flex items-center">
            <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
              <FiBookmark className="text-xl" />
            </div>
          </button>
        </li>
        <li className="pointer">
          <button className="flex items-center">
            <div className=" p-2.5 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition">
              <TbShare2 className="text-xl" />
            </div>
          </button>
        </li>
      </ul>

      <div className="flex gap-2 justify-between">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-orange-900 rounded-full flex justify-center items-center ">
            <span>U</span>
          </div>
          <input
            type="text"
            value={reply}
            onChange={e => setReply(e.target.value)}
            placeholder="Post your reply"
            className="block border-none outline-none"
          />

        </div>
        <button className={`px-4 py-1.5 font-semibold rounded-full text-gray-900 ${reply === '' ? 'bg-gray-400' : 'bg-white'}`}>Reply</button>
      </div>
    </div>
  )
}

export default SingleTweet