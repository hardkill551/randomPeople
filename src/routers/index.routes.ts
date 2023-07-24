import { getPerson } from "../controllers/person.controller";
import { Router } from "express";

const router = Router()

router.get("/person", getPerson)

export default router