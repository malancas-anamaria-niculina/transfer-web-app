import { putSignedFileUrl, test1 } from "./controller.js";
import { Router } from "express";
import bodyParser from "body-parser";

const router = new Router();

var jsonParser = bodyParser.json();

router.post("/test", jsonParser, test1);
router.post("/putUrl", jsonParser, putSignedFileUrl);

export default router;