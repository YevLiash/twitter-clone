import SingleTweet from '../../../components/SingleTweet.jsx'

async function getTweet(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  return res.json()

}

async function Tweet({params}) {
  const pageParams = await params
  const tweet = await getTweet(pageParams.id)
  console.log(tweet)
  return (
    <SingleTweet tweet={tweet} />
  )
}

export default Tweet