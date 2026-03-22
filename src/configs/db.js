import mongoose from 'mongoose';

const conn = () => {
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/api_metering', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB connected');
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });
}

export default conn;