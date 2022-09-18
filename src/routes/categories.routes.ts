import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../modules/cars/repositories/ICategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory/index";

const categoriesRoutes = Router();
const categoriesRepository: ICategoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export { categoriesRoutes };
