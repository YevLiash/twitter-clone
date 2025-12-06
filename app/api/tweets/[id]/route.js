import dbConnect from '../../../../lib/mongodb'
import Tweet from '../../../../models/Tweet'

export async function GET(req, {params}) {
  await dbConnect()
  const pageParams = await params

  try {
    console.log(pageParams.id)
    const tweet = await Tweet.findById(pageParams.id)

    if (!tweet) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Tweet not found'
      }), {status: 404})
    }

    return new Response(JSON.stringify({
      success: true,
      tweet: tweet
    }), {status: 200})
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {status: 400})
  }
}

export async function DELETE(req, {params}) {
  await dbConnect()

  const {id} = await params

  try {

    if (!id) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Tweet ID is required'
      }), {status: 400})
    }

    const deleted = await Tweet.findByIdAndDelete(id)

    if (!deleted) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Tweet not found'
      }), {status: 404})
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Tweet deleted',
      data: deleted
    }), {status: 200})

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {status: 400})
  }
}

export async function PATCH(req, {params}) {
  const pageParams = await params
  const {id} = await pageParams
  console.log('edit id', id)
  try {
    await dbConnect()
    const body = await req.json()
    const {content} = body

    if (!content) {
      return new Response(JSON.stringify({error: 'Content is required'}), {status: 400})
    }

    const updatedTweet = await Tweet.findByIdAndUpdate(
      id,
      {content},
      {new: true}
    )

    if (!updatedTweet) {
      return new Response(JSON.stringify({error: 'Tweet not found'}), {status: 404})
    }

    return new Response(JSON.stringify(updatedTweet), {status: 200})
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({error: 'Server error'}), {status: 500})
  }
}
