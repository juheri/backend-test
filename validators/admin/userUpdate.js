import Joi from "joi";

const courses = Joi.array()
  .items(
    Joi.object({
      name: Joi.string().required(),
      is_certificate: Joi.boolean().required(),
      year: Joi.number().required(),
    }),
  )
  .required();

const educations = Joi.array()
  .items(
    Joi.object({
      last_education: Joi.string().required(),
      academic_name: Joi.string().required(),
      major: Joi.string().required(),
      graduation_year: Joi.number().required(),
      ipk: Joi.string().required(),
    }),
  )
  .required();

const employment_histories = Joi.array()
  .items(
    Joi.object({
      company_name: Joi.string().required(),
      last_position: Joi.string().required(),
      last_salary: Joi.number().required(),
      year: Joi.number().required(),
    }),
  )
  .required();
const schema = Joi.object({
  id: Joi.number().required(),
  position: Joi.string().required(),
  name: Joi.string().required(),
  ktp_number: Joi.string().required(),
  birthday: Joi.string(),
  gender: Joi.string().valid("male", "female").required(),
  religion: Joi.string().required(),
  blood_type: Joi.string().required(),
  status: Joi.string().required(),
  ktp_address: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  closest_person: Joi.string().required(),
  skill: Joi.string().required(),
  is_out_assignment: Joi.boolean().required(),
  expected_sallary: Joi.number().required(),
  signature_date: Joi.string().required(),
  courses,
  educations,
  employment_histories,
});

export const updateUserValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: err?.message,
    });
  }
};
