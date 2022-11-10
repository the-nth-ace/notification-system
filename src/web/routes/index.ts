import { Router } from "express";
import exampleRoutes from "./example.routes";
import clientRoutes from "./client.routes";

const routes = Router();

routes.use("/example", exampleRoutes);
routes.use("/clients", clientRoutes);

export default routes;
