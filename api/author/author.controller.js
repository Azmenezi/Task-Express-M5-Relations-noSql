const Author = require("../../models/Author");
const Post = require("../../models/Post");

// exports.fetchAuthor = async (authorId, next) => {
//   try {
//     const author = await Post.findById(authorId);
//     return author;
//   } catch (error) {
//     next(error);
//   }
// };

exports.postCreate = async (req, res, next) => {
  try {
    const { authorId } = req.params;
    const foundAuthor = await Author.findById(authorId);
    const newPost = await Post.create({ ...req.body, author: foundAuthor._id });
    await foundAuthor.updateOne({ $push: { posts: newPost._id } });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.authorCreate = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

// exports.authorDelete = async (req, res, next) => {
//     try {
//       await Author.findByIdAndRemove({ _id: req.post.id });
//       res.status(204).end();
//     } catch (error) {
//       next(error);
//     }
//   };

//   exports.authorUpdate = async (req, res, next) => {
//     try {
//       await Author.findByIdAndUpdate(req.post.id, req.body);
//       res.status(204).end();
//     } catch (error) {
//       next(error);
//     }
//   };

exports.authorGet = async (req, res, next) => {
  try {
    const author = await Author.find().populate("posts");
    res.json(author);
  } catch (error) {
    next(error);
  }
};
