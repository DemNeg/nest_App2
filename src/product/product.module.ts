import { Global, Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product/product.service';

@Global()
@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
