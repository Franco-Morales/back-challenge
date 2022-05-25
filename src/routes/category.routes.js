import { Router } from "express";

import { deleteOneById, getAll, getById, saveOne, updateOneById } from "../controllers/category.controller"
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get("/", getAll );
router.get("/:id", getById);

router.post("/", checkAuth, saveOne);
router.put("/:id", checkAuth, updateOneById);
router.delete("/:id", checkAuth, deleteOneById);


export default router;