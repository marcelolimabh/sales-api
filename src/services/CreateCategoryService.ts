import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAllExists = this.categoriesRepository.findByName(name);
    if (categoryAllExists) {
      throw new Error("Category allready exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
