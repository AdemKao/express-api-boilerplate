// import UserModel from './model';

interface UserModel {
  name: string;
  email: string;
}
let UserModel: Array<UserModel> = [];

async function getUsers() {
  try {
    const users = UserModel;
    return users;
  } catch (error) {
    throw new Error("Failed to get users");
  }
}

async function createUser(userData: UserModel) {
  try {
    const newUser = await UserModel.push(userData);
    return newUser;
  } catch (error) {
    throw new Error("Failed to create user");
  }
}

export default {
  getUsers,
  createUser,

  UserModel,
};
