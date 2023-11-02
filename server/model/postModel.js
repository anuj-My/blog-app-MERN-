const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A post must have a title."],
    },
    category: {
      type: String,
      required: [true, "A post must have a title."],
    },
    description: {
      type: String,
      required: [true, "A post must have a description."],
    },

    content: {
      type: String,
      required: [true, "A post must have a content"],
    },
    coverImage: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);
module.exports = Post;
