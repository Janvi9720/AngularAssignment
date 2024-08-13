import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Ensure this is the correct path

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    // Add other providers here, if needed
  ]
};
