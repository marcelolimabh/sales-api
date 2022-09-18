import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { listCategoryController } from "../modules/cars/useCases/listCategories/index";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});

export { categoriesRoutes };
