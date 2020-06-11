import express, { json } from "express";
import PointController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointController();
routes.get("/items", itemsController.index);
routes.get("/points", pointsController.index);
routes.post("/points", pointsController.create);
routes.get("/points/:id", pointsController.show);

export default routes;
