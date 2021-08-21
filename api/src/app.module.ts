import { Module, HttpModule  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule} from '@nestjs/mongoose'
import { GameModule } from './game/game.module';

@Module({
  imports: [ProductModule, GameModule, HttpModule ,MongooseModule.forRoot('mongodb://localhost/products', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
