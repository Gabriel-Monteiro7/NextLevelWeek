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
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Criar a tabela
        return knex.schema.createTable("points", (table) => {
            table.increments("id").primary();
            table.string("image").notNullable();
            table.string("name").notNullable();
            table.string("email").notNullable();
            table.string("whatsapp").notNullable();
            table.decimal("latitude").notNullable();
            table.decimal("longitude").notNullable();
            table.string("city").notNullable();
            table.string("uf", 2).notNullable();
            table.string("road").notNullable();
            table.string("number").notNullable();
            table.string("district").notNullable();
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletar a tabela
        return knex.schema.dropTable("points");
    });
}
exports.down = down;
