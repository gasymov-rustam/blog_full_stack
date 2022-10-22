import mongoose from 'mongoose';

export const connectTodDb = async () => {
  const dbLink = process.env.DB ?? '';

  try {
    await mongoose.connect(dbLink);
    // const b = await PostModel.diffIndexes();
    // mongoose.model('Post').listIndexes()
    console.log('Connected to data base successfully!!');
  } catch (error) {
    throw new Error('Connected to data base failed, try again');
  }
};
