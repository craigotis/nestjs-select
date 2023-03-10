Run:

```
npm i
npm run test:e2e
```

While our individual services (`GoogleService` and `AppleService`) get the correct `HttpService` instances, we're trying to figure out how to spy on those specific instances in the context of a broader `app` during integration testing.

Sticking point:

```
  console.log
    The HttpService we found for GoogleModule using select() has baseURL: https://www.apple.com

      at Object.<anonymous> (app.e2e-spec.ts:24:13)
```

Full Output:

```
> nestjs-select@0.0.1 test:e2e
> jest --config ./test/jest-e2e.json

  console.log
    GoogleService was instantiated with an HttpService that has baseURL: https://www.google.com

      at new GoogleService (../src/google/google.service.ts:8:13)

  console.log
    AppleService was instantiated with an HttpService that has baseURL: https://www.apple.com

      at new AppleService (../src/apple/apple.service.ts:8:13)

  console.log
    The HttpService we found for GoogleModule using select() has baseURL: https://www.apple.com

      at Object.<anonymous> (app.e2e-spec.ts:24:13)

  console.log
    Google's hello: 14031

      at GoogleService.sayHello (../src/google/google.service.ts:16:13)

  console.log
    GoogleService was instantiated with an HttpService that has baseURL: https://www.google.com

      at new GoogleService (../src/google/google.service.ts:8:13)

  console.log
    AppleService was instantiated with an HttpService that has baseURL: https://www.apple.com

      at new AppleService (../src/apple/apple.service.ts:8:13)

  console.log
    The HttpService we found for AppleModule using select() has baseURL: https://www.apple.com

      at Object.<anonymous> (app.e2e-spec.ts:35:13)

  console.log
    Apple's hello: 163605

      at AppleService.sayHello (../src/apple/apple.service.ts:16:13)

 FAIL  test/app.e2e-spec.ts
  App
    ✕ Google says hello (1466 ms)
    ✓ Apple says hello (181 ms)

  ● App › Google says hello

    expect(jest.fn()).toHaveBeenCalledTimes(expected)

    Expected number of calls: 1
    Received number of calls: 0

      28 |     const getterSpy = jest.spyOn(httpServiceForGoogle, 'get');
      29 |     await app.get(GoogleService).sayHello();
    > 30 |     expect(getterSpy).toHaveBeenCalledTimes(1);
         |                       ^
      31 |   });
      32 |
      33 |   test('Apple says hello', async () => {

      at Object.<anonymous> (app.e2e-spec.ts:30:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        4.651 s
Ran all test suites.
```
