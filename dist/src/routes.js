"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const pointsController_1 = __importDefault(require("./controllers/pointsController"));
const itemsController_1 = __importDefault(require("./controllers/itemsController"));
const multer_2 = __importDefault(require("./config/multer"));
const routes = express_1.default.Router();
const upload = multer_1.default(multer_2.default);
const itemsController = new itemsController_1.default();
const pointsController = new pointsController_1.default();
routes.get("/items", itemsController.index);
routes.get("/points", pointsController.index);
routes.post("/points", upload.single("image"), pointsController.create);
routes.get("/points/:id", pointsController.show);
exports.default = routes;
