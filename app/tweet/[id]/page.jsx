import SingleTweet from '../../../components/SingleTweet.jsx'

async function getTweet(id) {
  const res = await fetch(`http://localhost:3000/api/tweets/${id}`)
  return res.json()

}

async function Tweet({params}) {
  const pageParams = await params
  const data = await getTweet(pageParams.id)
  console.log(data)
  return (

    <SingleTweet tweet={data.tweet} />

  )
}

export default Tweet