'use client'

import {BsDot, BsFillPatchCheckFill} from 'react-icons/bs'
import {timeAgo} from '../utils'
import UserAvatar from '../components/UserAvatar'
import {useUser} from '../context/UserContext'
import {useState} from 'react'
import TweetActions from '../components/TweetActions'
import TweetMenu from '../components/TweetMenu'

function TweetCard({tweet, refetchTweets}) {
  const {user} = useUser()
  const currentUserId = user?._id

  const [showTweetMenu, setShowTweetMenu] = useState(false)

  return (
    <div className="p-2 sm:p-4 border-b sm:border-x  border-gray-700 flex gap-1.5 sm:gap-3">
      <UserAvatar />

      <div className="w-full flex flex-col gap-2 sm:gap-3">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 mb-2 sm:mb-3">
              <p>{tweet.author?.username}</p>
              <BsFillPatchCheckFill className="text-blue-500" />
              <p className="text-gray-400">@{tweet.author?.username}</p>
              <BsDot className="text-sm inline text-gray-500" />
              <span className="text-gray-500">{timeAgo(tweet.createdAt)}</span>
            </div>
            <div>
              {currentUserId === tweet?.author.id && <TweetMenu
                tweet={tweet}
                setShowTweetMenu={setShowTweetMenu}
                showTweetMenu={showTweetMenu}
              />}
            </div>

          </div>
          <p>{tweet.content}</p>
        </div>

        <TweetActions
          tweet={tweet}
        />
      </div>
    </div>
  )
}

export default TweetCard