import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAllExists = this.categoriesRepository.findByName(name);
    if (categoryAllExists) {
      throw new Error("Category allready exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryUseCase };
