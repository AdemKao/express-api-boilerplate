import express from "express";
import userController from "./controller";
const router = express.Router();
router.get("/index", userController.getIndex);
router.get("/", userController.getUsers);
router.post("/", userController.createUser);

export default router;
