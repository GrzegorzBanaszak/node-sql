import { Router } from "express";
import { getAllEmployers, getById } from "../controllers/employersController";

const router = Router();

router.get("/", getAllEmployers);
router.get("/:id", getById);

export default router;
