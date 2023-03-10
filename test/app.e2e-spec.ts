import { HttpService } from '@nestjs/axios';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { AppleModule } from '../src/apple/apple.module';
import { AppleService } from '../src/apple/apple.service';
import { GoogleModule } from '../src/google/google.module';
import { GoogleService } from '../src/google/google.service';

describe('App', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('Google says hello', async () => {
    const httpServiceForGoogle = app.select(GoogleModule).get(HttpService);
    console.log(
      'The HttpService we found for GoogleModule using select() has baseURL:',
      httpServiceForGoogle.axiosRef.defaults.baseURL,
    );
    const getterSpy = jest.spyOn(httpServiceForGoogle, 'get');
    await app.get(GoogleService).sayHello();
    expect(getterSpy).toHaveBeenCalledTimes(1);
  });

  test('Apple says hello', async () => {
    const httpServiceForApple = app.select(AppleModule).get(HttpService);
    console.log(
      'The HttpService we found for AppleModule using select() has baseURL:',
      httpServiceForApple.axiosRef.defaults.baseURL,
    );
    const getterSpy = jest.spyOn(httpServiceForApple, 'get');
    await app.get(AppleService).sayHello();
    expect(getterSpy).toHaveBeenCalledTimes(1);
  });
});
