import { prismaConnection } from "../../../libs/connection/index.js";
import { comparePassword } from "../../../libs/bcrypt/index.js";
import { signToken } from "../../../libs/jwt/index.js";

export const userLogin = async (email, password) => {
  try {
    const user = await prismaConnection.users.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    if (!user) throw new Error("user not found");
    const compare = comparePassword(password, user?.password);
    if (!compare) throw new Error("error login user");
    const dataToken = {
      id: user?.id,
      email: user?.email,
    };
    const token = signToken(dataToken);
    return { token };
  } catch (err) {
    console.error("error login user =>> ", err);
    throw new Error("error login user");
  }
};

export const userVerifyToken = async (id, email) => {
  try {
    return await prismaConnection.users.findUnique({
      where: {
        id,
        email,
      },
      select: {
        id: true,
        email: true,
      },
    });
  } catch (err) {
    console.error("error user verify token ", err);
    throw new Error("user not found");
  }
};

export const userDetail = async (id) => {
  try {
    return await prismaConnection.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        position: true,
        name: true,
        ktp_number: true,
        birthday: true,
        gender: true,
        religion: true,
        blood_type: true,
        status: true,
        ktp_address: true,
        address: true,
        phone: true,
        closest_person: true,
        is_out_assignment: true,
        expected_sallary: true,
        signature_date: true,
        created_at: true,
        updated_at: true,
        courses: {
          select: {
            id: true,
            name: true,
            is_certificate: true,
            year: true,
          },
        },
        educations: {
          select: {
            id: true,
            last_education: true,
            academic_name: true,
            graduation_year: true,
            ipk: true,
            major: true,
          },
        },
        employment_histories: {
          select: {
            id: true,
            company_name: true,
            last_position: true,
            last_salary: true,
            year: true,
          },
        },
      },
    });
  } catch (err) {
    console.error("error get detail user =>> ", err);
    throw new Error("detail user not found");
  }
};
