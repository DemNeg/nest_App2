/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CvService } from './cv.service';
import { AddCvDto } from './dtos/Add-cv.dto';
import { CvEntity } from './entities/cv.entity';

@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}

  @Get('all')
  async getAllCvs(): Promise<CvEntity[]> {
    return await this.cvService.getCvs();
  }

  @Post('add')
  async addCv(@Body() addCvDto: AddCvDto) {
    return await this.cvService.addCv(addCvDto);
  }
}
