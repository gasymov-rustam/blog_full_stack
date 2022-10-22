import { PostModel } from '../models/index.js';

export const create = async (post, id) => {
  try {
    const doc = new PostModel({
      ...post,
      user: id,
    });

    return await doc.save();
  } catch (error) {
    console.log(error);
    throw new Error('Can not create post');
  }
};

export const getAll = async () => {
  try {
    return await PostModel.find().populate('user').exec();
  } catch (error) {
    throw new Error('Can not create post');
  }
};

export const getLastTags = async () => {
  try {
    const tags = await PostModel.find().limit(5).exec();
    return tags
      .map((obj) => obj.tags)
      .flat()
      .slice(-5);
  } catch (error) {
    throw new Error('Can not create post');
  }
};

export const getOneById = async (id) => {
  try {
    return await PostModel.findByIdAndUpdate(
      { _id: id },
      { $inc: { viewsCount: 1 } },
      { returnDocument: 'after' }
      // (err, doc) => {
      //   if (err) {
      //     throw new Error('Can not create post');
      //   }

      //   if (!doc) {
      //     throw new Error('Can not create post');
      //   }
      //   console.log(doc);
      //   return doc;
      // }
    ).populate('user');
  } catch (error) {
    throw new Error('Can not create post');
  }
};

export const deleteById = async (id) => {
  try {
    return await PostModel.findByIdAndDelete(
      { _id: id } /* (err, doc) => {
      if (err) {
        throw new Error('Can not create post');
      }

      if (!doc) {
        throw new Error('Can not create post');
      }
      console.log(doc);
      return doc;
    } */
    );
  } catch (error) {
    throw new Error('Can not create post');
  }
};

export const update = async (post, id) => {
  try {
    return await PostModel.findByIdAndUpdate({ _id: id }, { ...post });
  } catch (error) {
    throw new Error('Can not create post');
  }
};
