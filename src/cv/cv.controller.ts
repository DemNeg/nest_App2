/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CvService } from './cv.service';
import { AddCvDto } from './dtos/Add-cv.dto';
import { UpdateCvDto } from './dtos/Update-cv.dto';
import { CvEntity } from './entities/cv.entity';

@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}

  @Get('all')
  async getAllCvs(): Promise<CvEntity[]> {
    return await this.cvService.getCvs();
  }

  @Post('add')
  async addCv(@Body() addCvDto: AddCvDto): Promise<CvEntity> {
    return await this.cvService.addCv(addCvDto);
  }

  @Patch('edit/:id')
  async updateCv(
    @Body() cv: UpdateCvDto,
    @Param('id') cvId: string,
  ): Promise<CvEntity> {
    return await this.cvService.updateCv(cvId, cv);
  }
}
