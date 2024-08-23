import Joi from "joi";

const pageSchema = Joi.string().required().label("query page");
const paramSchema = Joi.string().required().label("params");

export const usersValidator = async (req, res, next) => {
  try {
    const { page } = req.query;
    await pageSchema.validateAsync(page);
    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: err?.message,
    });
  }
};

export const userValidator = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    await paramSchema.validateAsync(user_id);
    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: err?.message,
    });
  }
};

export const deleteUserValidator = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    await paramSchema.validateAsync(user_id);
    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: err?.message,
    });
  }
};
