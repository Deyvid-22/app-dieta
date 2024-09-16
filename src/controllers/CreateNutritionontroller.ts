import { FastifyRequest, FastifyReply } from "fastify";

import { CreateNutrionService } from "../service/CreateNutritionService";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

export class CreateNutritionontroller {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, age, gender, objective, level, height } =
      request.body as DataProps;

    const createNutrition = new CreateNutrionService();
    const nutrition = await createNutrition.execute({
      name,
      age,
      weight,
      gender,
      objective,
      level,
      height,
    });
    reply.send(nutrition);
  }
}
