import userModel from "../models/user_model";
import { replaceIdByInArray, replaceIdByInObject } from "../utils/data_utils";

export const getAllUsers = async () => {
  const users = await userModel.find({}).lean();
  return replaceIdByInArray(users ? users : []);
};

export const getUserById = async (id: string) => {
  const user = await userModel.findById(id).lean();
  return replaceIdByInObject(user ? user : null);
};
