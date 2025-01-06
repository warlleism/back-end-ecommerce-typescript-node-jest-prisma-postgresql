import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { RequestsModule } from './modules/requests/requests.module';
import { UserModule } from './modules/user/user.module';
import { LoggerMiddlewareModule } from './middlewares/logger.middleware.module';

@Module({
  imports: [ProductsModule, RequestsModule, UserModule, LoggerMiddlewareModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
