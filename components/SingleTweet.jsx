import {FaArrowLeftLong} from 'react-icons/fa6'
import Link from 'next/link'

function SingleTweet({tweet}) {
  return (
    <div>
      <Link
        href={'/'}
        className="flex gap-2 items-center mb-4"
      >
        <FaArrowLeftLong />
        <span>Post</span>
      </Link>
      {tweet.body}
    </div>
  )
}

export default SingleTweet