import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { importCategoryController } from "../modules/cars/useCases/importCategory/index";
import { listCategoryController } from "../modules/cars/useCases/listCategories/index";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  console.log("testando docker");
  return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
