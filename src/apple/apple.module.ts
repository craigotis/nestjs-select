import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppleService } from './apple.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://www.apple.com',
    }),
  ],
  providers: [AppleService],
})
export class AppleModule {}
