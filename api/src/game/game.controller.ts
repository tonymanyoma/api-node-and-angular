import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from 'src/game/game.service';

@Controller('game')
export class GameController {

    constructor(private gameService: GameService){}

    //api externa de videojuegos
    @Get('/games')
    getGames(){
        return this.gameService.getGames();

        // return 'juegos';
    }
}
