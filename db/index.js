import mongoose from 'mongoose';
const uri = `mongodb+srv://sanyamjain10168:${process.env.PASSWORD}@cluster0.lga6drh.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri)
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
  
export default connectDB