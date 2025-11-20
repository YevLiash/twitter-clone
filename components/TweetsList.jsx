import Link from 'next/link'
import TweetCard from '../components/TweetCard'

function TweetsList({tweets}) {
  console.log(tweets)
  return (

    tweets.length === 0 ? <div>No Tweets</div> :
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.content}>
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