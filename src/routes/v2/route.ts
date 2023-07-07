import express from "express";
import user from "../../modules/v2/user";

const router = express.Router();

// router.get("/user", async (req, res) => res.send("v2/user"));
router.use("/user", user.router);

export default router;
