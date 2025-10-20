import TweetCard from '@/components/TweetCard'

async function getTweets(){
  const res = await fetch("https://dummyjson.com/posts")
  return res.json()
}

 async function Home() {
  const tweets = await getTweets()
   console.log(tweets)

  return (
    <main>
      {tweets.posts.map(tweet=>{
        return <TweetCard key={tweet.id} tweet={tweet} />
      })}
    </main>
  );
}

export default Home
