import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable()
export class GameService {

    constructor(private readonly http: HttpService){}

    async getGames(){
        const headersRequest = {
            'x-rapidapi-key': 'f9b49b987dmshb349c0c35ea39b9p11a026jsncd4612cb52ad',
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
          }

          const result = await this.http.get(
            `https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc`,
            { headers: headersRequest },

          );

      
          return result.pipe(
                map(response => response.data)
           );;
          
    }
}
