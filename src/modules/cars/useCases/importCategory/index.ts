import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository: ICategoriesRepository =
  CategoriesRepository.getInstacnce();
const importCategoryUseCase: ImportCategoryUseCase = new ImportCategoryUseCase(
  categoriesRepository
);
const importCategoryController: ImportCategoryController =
  new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
