import { Router } from "express";
import ClientController from "@web/controllers/client.controller";
import { CreateClientValidator, validate } from "../validators/";

const routes = Router();

routes.get("/", ClientController.index);
routes.get("/:id");
routes.post("/", CreateClientValidator, validate, ClientController.create);

export default routes;
