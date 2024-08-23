import jwt from "jsonwebtoken";

export const signToken = (data) => {
  const token = jwt.sign(data, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRED,
  });
  return token;
};

export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) {
    console.log("error verify token =>> ", err);
    throw new Error("error verify token");
  }
};
