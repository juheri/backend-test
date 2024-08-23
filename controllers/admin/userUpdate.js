import { updateUser } from "../../modules/mutation/users/update.js";

export const updateUserController = async (req, res) => {
  try {
    const {
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
    } = req.body;
    const result = await updateUser(
      Number(id),
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
      message: "update data user success",
      data: result,
    });
  } catch (err) {
    console.log("error =>>", err);
    return res.status(400).json({
      status: 400,
      success: false,
      message: "can't update data",
    });
  }
};
