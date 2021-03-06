import { Router } from "express";
import { CreateCategoryController } from "./controllers/categoryControllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/categoryControllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/categoryControllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/categoryControllers/UpdateCategoryController";
import { CreateVideoController } from "./controllers/videoControllers/CreateVideoController";
import { GetAllVideosController } from "./controllers/videoControllers/GetAllVideosController";


const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);


export { routes };