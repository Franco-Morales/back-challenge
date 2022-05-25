import { Router } from "express";

import { loggIn, signUp } from "../controllers/auth.controller";
import { loggInVal, singUpVal } from "../validators/authVal";

const router = Router();

router.post("/signup", singUpVal, signUp);
router.post("/loggin", loggInVal, loggIn);


export default router;