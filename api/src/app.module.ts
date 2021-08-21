import { Module, HttpModule  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule} from '@nestjs/mongoose'
import { GameModule } from './game/game.module';

@Module({
  imports: [ProductModule, GameModule, HttpModule ,MongooseModule.forRoot('mongodb+srv://antony:hbVr0cC86ZdhW5Gh@cluster0.jcvo5.mongodb.net/products?retryWrites=true&w=majority&ssl=true', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
