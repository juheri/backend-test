import Joi from "joi";

const schema = Joi.string().required().label("token");
export const tokenValidator = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    await schema.validateAsync(authorization);
    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: err?.message,
    });
  }
};
