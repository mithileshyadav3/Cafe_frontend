import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/Service/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
  },provideHttpClient(withFetch(),withInterceptorsFromDi()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
