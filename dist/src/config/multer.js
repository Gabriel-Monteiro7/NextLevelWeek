"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: path_1.default.resolve(__dirname, "..", "..", "uploads", "images"),
        filename(request, file, callback) {
            const hash = crypto_1.default.randomBytes(6).toString("hex");
            const fileName = `${hash}-${file.originalname}`;
            callback(null, fileName);
        },
    }),
};
