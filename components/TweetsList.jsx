import Link from 'next/link'
import TweetCard from '../components/TweetCard'

function TweetsList({tweets, refetchTweets}) {
  console.log(tweets)

  return (

    tweets.length === 0 ? <div className="text-center mt-5">No Tweets</div> :
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet._id}>
            <Link
              href={`/tweet/${tweet._id}`}
            >
              <TweetCard
                tweet={tweet}
                refetchTweets={refetchTweets}
              />
            </Link>
          </li>
        ))}
      </ul>

  )
}

export default TweetsList