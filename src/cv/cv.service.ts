/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddCvDto } from './dtos/Add-cv.dto';
import { UpdateCvDto } from './dtos/Update-cv.dto';
import { CvEntity } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>,
  ) {}

  async getCvs(): Promise<CvEntity[]> {
    return await this.cvRepository.find();
  }

  async addCv(cv: AddCvDto): Promise<CvEntity> {
    return await this.cvRepository.save(cv);
  }

  async updateCv(id: string, cv: UpdateCvDto): Promise<CvEntity> {
    // on recup le cv d'Id id et on remplace les anciennes valeurs de ce cv
    // par ceux du cv passé en paramettre
    const newCv = await this.cvRepository.preload({
      id,
      ...cv,
    });
    // on sauvegqrde la nouvelle version du cv
    return await this.cvRepository.save(newCv);
  }
}
