import multer from "multer";
import express, { json } from "express";
import PointController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";
import multerConfig from "./config/multer";
const routes = express.Router();
const upload = multer(multerConfig);
const itemsController = new ItemsController();
const pointsController = new PointController();
routes.get("/items", itemsController.index);
routes.get("/points", pointsController.index);
routes.post("/points", upload.single("image"), pointsController.create);

routes.get("/points/:id", pointsController.show);

export default routes;
