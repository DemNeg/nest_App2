import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonneModule } from './personne/personne.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PersonneModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
