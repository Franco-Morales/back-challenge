import { Router } from "express";

import { deleteOneById, getAll, getById, saveOne, updateOneById } from "../controllers/videogame.controller"
import { checkAuth } from "../middlewares/checkAuth";
import { videogameVal } from "../validators/videogameVal";


const router = Router();

router.get("/", getAll );
router.get("/:id", getById);

router.post("/", checkAuth, videogameVal, saveOne);
router.put("/:id", checkAuth, videogameVal, updateOneById);
router.delete("/:id", checkAuth, deleteOneById);


export default router;