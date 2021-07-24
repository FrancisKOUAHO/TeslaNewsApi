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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const databaseConnection_1 = require("./databaseConnection");
const role_route_1 = require("./routes/role.route");
const user_route_1 = require("./routes/user.route");
const post_route_1 = require("./routes/post.route");
const category_route_1 = require("./routes/category.route");
const tag_route_1 = require("./routes/tag.route");
const apidoc_1 = require("./docs/apidoc");
dotenv_1.default.config();
const HOST = process.env.HOST || "http://localhost";
const PORT = parseInt(process.env.PORT || "4500");
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/", role_route_1.roleRoute());
app.use("/", user_route_1.userRoute());
app.use("/", post_route_1.postRoute());
app.use("/", category_route_1.categoryRoute());
app.use("/", tag_route_1.tagRoute());
app.use("/documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(apidoc_1.apiDocumentation));
app.get("/", (req, res) => {
    return res.json({ message: "Hello World!" });
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield databaseConnection_1.connectToDatabase();
    console.log(`Application started on URL ${HOST}:${PORT}`);
}));
