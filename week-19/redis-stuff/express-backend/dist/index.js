"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = (0, redis_1.createClient)();
client.connect();
app.post('/submit', (req, res) => {
    const { problemId, userId, code, language } = req.body;
    client.lPush("submissions", JSON.stringify({ problemId, userId, code, language }));
    res.json({ message: "Submission received!" });
});
app.listen(3000);
