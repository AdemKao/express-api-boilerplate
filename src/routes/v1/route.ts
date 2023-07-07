import express from "express";
import user from "../../modules/v1/user";
const router = express.Router();

router.use("/user", user.router);

export default router;
