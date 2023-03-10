import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GoogleService {
  constructor(private readonly httpService: HttpService) {
    console.log(
      'GoogleService was instantiated with an HttpService that has baseURL:',
      httpService.axiosRef.defaults.baseURL,
    );
  }

  async sayHello() {
    const res = await firstValueFrom(this.httpService.get('/'));
    console.log("Google's hello:", res.data.length);
  }
}
