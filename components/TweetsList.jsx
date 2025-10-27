import Link from 'next/link'
import TweetCard from '../components/TweetCard'

function TweetsList({tweets}) {
  return (
    <ul>
      {tweets.posts.map((tweet) => (
        <li key={tweet.id}>
          <Link
            href={`/tweet/${tweet.id}`}
          >
            <TweetCard tweet={tweet} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TweetsList