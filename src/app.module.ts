import { Module } from '@nestjs/common';
import { AppleModule } from './apple/apple.module';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [GoogleModule, AppleModule],
})
export class AppModule {}
