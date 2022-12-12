// require modules for the User Model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "username is required",
    },
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    password: {
      type: String,
      required: "password is required",
    },
    email: {
      type: String,
      required: "email address is required",
    },
  },
  //   TimeStamp for createdAt and updatedAt
  { timestamps: true }
);

// Encrypting Password before saving user details.

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Return JWT token
userSchema.methods.getJwtToken = function () {
  const payload = { id: this._id };

  return jwt.sign(payload, process.env.TOKEN, {
    expiresIn: process.env.TOKEN_EXPIRES_TIME,
  });
};

userSchema.methods.comparePassword = async function (newPassword) {
  return await bcrypt.compare(newPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
