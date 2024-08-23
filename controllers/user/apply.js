import { userApply } from "../../modules/mutation/users/update.js";

export const userApplyController = async (req, res) => {
  try {
    const { id } = req.dataUserMiddleware;
    const {
      position,
      name,
      ktp_number,
      birthday,
      gender,
      religion,
      blood_type,
      status,
      ktp_address,
      address,
      phone,
      closest_person,
      skill,
      is_out_assignment,
      expected_sallary,
      signature_date,
      courses,
      educations,
      employment_histories,
    } = req.body;
    const result = await userApply(
      id,
      position,
      name,
      ktp_number,
      birthday,
      gender,
      religion,
      blood_type,
      status,
      ktp_address,
      address,
      phone,
      closest_person,
      skill,
      is_out_assignment,
      expected_sallary,
      signature_date,
      courses,
      educations,
      employment_histories,
    );
    return res.status(200).json({
      status: 200,
      success: true,
      message: "your job is apply",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "failed apply job",
    });
  }
};
