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
