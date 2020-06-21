"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class PointsController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { city, uf, items } = request.query;
            if (Object.entries(request.query).length === 0) {
                const points = yield connection_1.default("points").select("*");
                return response.json(points);
            }
            if (items === "") {
                items = "1,2,3,4,5,6";
            }
            const parsedItems = String(items)
                .split(",")
                .map((item) => Number(item.trim()));
            const points = yield connection_1.default("points")
                .join("point_items", "points.id", "=", "point_items.point_id")
                .whereIn("point_items.item_id", parsedItems)
                .where("city", String(city))
                .where("uf", String(uf))
                .distinct()
                .select("points.*");
            const serializedPoints = points.map((point) => {
                return Object.assign(Object.assign({}, point), { image_url: "http://localhost:3001/uploads/images/" + point.image });
            });
            return response.json(serializedPoints);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const point = yield connection_1.default("points").where("id", id).first();
            if (!point) {
                return response.status(400).json({ message: "Point not found." });
            }
            const serializedPoint = Object.assign(Object.assign({}, point), { image_url: "http://localhost:3001/uploads/images/" + point.image });
            const items = yield connection_1.default("items")
                .join("point_items", "items.id", "=", "point_items.item_id")
                .where("point_items.point_id", id)
                .select("items.title");
            return response.json({ point: serializedPoint, items });
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, whatsapp, latitude, longitude, city, uf, road = "", number = "", district = "", items, } = request.body;
            const trx = yield connection_1.default.transaction();
            const point = {
                image: request.file.filename,
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf,
                road,
                number,
                district,
            };
            const insertedIds = yield trx("points").insert(point);
            const point_id = insertedIds[0];
            const pointItems = items
                .split(",")
                .map((item) => Number(item.trim()))
                .map((item_id) => {
                return {
                    item_id,
                    point_id,
                };
            });
            yield trx("point_items").insert(pointItems);
            yield trx.commit();
            return response.json(Object.assign({ id: point_id }, point));
        });
    }
}
exports.default = PointsController;
