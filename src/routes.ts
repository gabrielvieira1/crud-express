import { Router } from "express";
import { CreateCategoryController } from "./controllers/categoryControllers/CreateCategoryController";


const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);

export { routes };