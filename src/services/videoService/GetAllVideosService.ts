import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";

export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Video);

    const videos = await repo.find({
      //tomar cuidado com o que vai retornar pode vir muitos itens.
      relations: ["category"],
    });

    return videos;
  }
}