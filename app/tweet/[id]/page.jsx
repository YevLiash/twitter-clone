import Link from 'next/link'
import {FaArrowLeftLong} from 'react-icons/fa6'

async function getTweet(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  return res.json()

}

async function Tweet({params}) {
  const pageParams = await params
  const tweet = await getTweet(pageParams.id)
  console.log(tweet)
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

export default Tweet