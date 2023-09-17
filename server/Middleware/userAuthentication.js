import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    const userToken = req?.headers?.cookie;
    if (!userToken) {
      return res.status(403).json({
        message: "Session Expired. Please Login Again.",
        success: false,
      });
    }
    const token = userToken.split("=")[1];
    const correct = jwt.verify(token, "PRIVATE_KEY");
    if (!correct) {
      return res.status(403).json({
        message: "Session Expired. Please Login Again.",
        success: false,
      });
    }
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Session Expired. Please Login Again.",
      success: false,
    });
  }
};
