import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRrequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRrequest): void {
    const specificationAllreadyExists =
      this.specificationRepository.findByName(name);
    if (specificationAllreadyExists) {
      throw new Error(`Specification already exists: ${name}`);
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
