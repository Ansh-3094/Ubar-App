const blackListTokenModel = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const captionModel = require("../models/caption.model");

module.exports.authUser = async (req, res, next) => {
  try {
    let token;

    // Get token from header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // Get token from cookies
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    // No token → Unauthorized
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check blacklist (AFTER token exists)
    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token expired" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaption = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Token expired" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const caption = await captionModel.findById(decoded._id);

    if (!caption) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.caption = caption;
    req.token = token;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
