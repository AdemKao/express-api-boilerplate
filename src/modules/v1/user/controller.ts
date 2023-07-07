import { Request, Response } from "express";
import userService from "./service";

async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
async function getIndex(req: Request, res: Response) {
  res.send("v1");
}

export default {
  getIndex,
  getUsers,
  createUser,
};
