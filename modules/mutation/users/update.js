import { prismaConnection } from "../../../libs/connection/index.js";

export const userApply = async (
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
) => {
  try {
    return await prismaConnection.users.update({
      where: { id },
      data: {
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
        signature_date: new Date(signature_date),
        courses: {
          createMany: {
            data: courses,
          },
        },
        educations: {
          createMany: {
            data: educations,
          },
        },
        employment_histories: {
          createMany: {
            data: employment_histories,
          },
        },
      },
      select: {
        id: true,
        email: true,
        position: true,
        name: true,
      },
    });
  } catch (err) {
    console.error("error user apply =>> ", err);
    throw new Error("error user apply");
  }
};

export const updateUser = async (
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
) => {
  try {
    return prismaConnection.$transaction(async (tx) => {
      await tx.courses.deleteMany({ where: { user_id: id } });
      await tx.educations.deleteMany({ where: { user_id: id } });
      await tx.employment_histories.deleteMany({ where: { user_id: id } });
      return await tx.users.update({
        data: {
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
          signature_date: new Date(signature_date),
          courses,
          educations,
          employment_histories,
          courses: {
            createMany: { data: courses },
          },
          educations: {
            createMany: { data: educations },
          },
          employment_histories: {
            createMany: { data: employment_histories },
          },
        },
        where: { id },
        select: {
          id: true,
          email: true,
          position: true,
          name: true,
        },
      });
    });
  } catch (err) {
    console.error("error update user =>> ", err);
    throw new Error("error update user");
  }
};
