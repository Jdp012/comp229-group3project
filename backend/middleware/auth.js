// Check if user is authenticated or not
const jwt = require("jsonwebtoken");
const user = require("../model/user");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // Check if token exist
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access, kindly login to use this resources",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN);

    req.user = await user.findById(decoded.id);

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
    console.log(error.message);
  }
};
