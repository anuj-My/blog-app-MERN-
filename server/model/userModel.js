const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the username."],
  },

  email: {
    type: String,
    required: [true, "Please provide the username."],
    unique: true,
    lower: true,
    validate: [validator.isEmail, "Please provide the valid email"],
  },

  photo: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "Please provide the password."],
    minlength: [8, "Password must be atleast 8 characters"],
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, "Please confirm the password."],
    validate: {
      validator: function (val) {
        return val === this.password;
      },

      message: "Password are not the same.",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

// INSTACE METHODS
userSchema.methods.correctPassword = async function (
  userPassword,
  passwordInDB
) {
  return await bcrypt.compare(userPassword, passwordInDB);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
