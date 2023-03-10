import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppleService {
  constructor(private readonly httpService: HttpService) {
    console.log(
      'AppleService was instantiated with an HttpService that has baseURL:',
      httpService.axiosRef.defaults.baseURL,
    );
  }

  async sayHello() {
    const res = await firstValueFrom(this.httpService.get('/'));
    console.log("Apple's hello:", res.data.length);
  }
}
