import express from "express";
import { createCatController, getAllCatsController, getSingleCatController, recommendController, searchCatsController } from "../controller/cat.controller.ts";

const router = express.Router();

router.post('/create',createCatController);
router.get('/search/all', searchCatsController);
router.get('/', getAllCatsController);
router.get('/:id' , getSingleCatController);
router.post("/recommend", recommendController);


export default router;