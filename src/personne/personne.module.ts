import { Module } from '@nestjs/common';
import { PersonneController } from './controllers/personne.controller';
import { PersonneService } from './services/personne/personne.service';

@Module({
  controllers: [PersonneController],
  providers: [PersonneService]
})
export class PersonneModule {}
