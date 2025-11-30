import * as jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'supersecret'

export async function GET(req) {
  try {
    const token = req.cookies.get('token')?.value

    if (!token) {
      return new Response(JSON.stringify({user: null}), {status: 200})
    }

    const decoded = jwt.verify(token, SECRET)

    return new Response(JSON.stringify({
      user: {
        _id: decoded.id,
        username: decoded.username,
        email: decoded.email
      }
    }), {status: 200})

  } catch (err) {
    console.error('Error verifying token:', err)
    return new Response(JSON.stringify({user: null}), {status: 200})
  }
}
