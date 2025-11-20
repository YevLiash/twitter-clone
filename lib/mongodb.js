import mongoose from 'mongoose'

async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDM connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default dbConnect