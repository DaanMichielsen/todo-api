"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// instantiate express app
const app = (0, express_1.default)();
dotenv_1.default.config();
// define server port
const port = process.env.PORT;
// create default route for application
app.get("/", (req, res) => {
    res.send("Express + TypeScript server");
});
// Start listening on defined port for request
app.listen(port);
