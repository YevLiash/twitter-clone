import dbConnect from '../../../../../lib/mongodb'
import Tweet from '../../../../../models/Tweet'

export async function PATCH(req, {params}) {
  await dbConnect()
  const {id} = await params
  const {userId} = await req.json()
  console.log(id, userId)
  try {

    if (!userId) {
      return new Response(JSON.stringify({
        success: false,
        error: 'userId is required'
      }), {status: 400})
    }

    const tweet = await Tweet.findById(id)

    if (!tweet) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Tweet not found'
      }), {status: 404})
    }


    if (tweet.liked.includes(userId)) {
      tweet.liked.pull(userId)
    } else {
      tweet.liked.push(userId)
    }

    await tweet.save()

    return new Response(JSON.stringify({
      success: true,
      data: tweet
    }), {status: 200})

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {status: 400})
  }
}
