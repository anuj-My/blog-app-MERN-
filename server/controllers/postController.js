const Post = require("../model/postModel");
const AppError = require("../utils/appError");

exports.getAllPosts = async (req, res) => {
  try {
    let { page, limit, sort, fields, ...queryObj } = req.query;

    let query = Post.find(queryObj);

    // Sort

    if (sort) {
      const sortBy = sort.split(",").join("");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-updatedAt -createdAt");
    }

    // limit Fields
    if (fields) {
      const limitFields = fields.split(",").join(" ");
      query = query.select(limitFields);
    } else {
      query = query.select("-__v");
    }

    // PAGINATION --> LIMIT AND PAGE
    page = page * 1 || 1;
    limit = limit * 1 || 100;

    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // EXCUTE QUERY
    const posts = await query.populate([
      {
        path: "user",
        select: ["photo", "name"],
      },
    ]);

    res.status(200).json({
      status: "success",
      numOfPosts: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      console.log(post);
      return next(new AppError("No Post found with that Id.", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create({ ...req.body, user: req.user._id });
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return next(new AppError("No Post found with that Id.", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return next(new AppError("No Post found with that Id.", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
