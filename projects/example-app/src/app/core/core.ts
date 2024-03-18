import {
  Routes,
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ENVIRONMENT_INITIALIZER } from '@angular/core';

export interface CoreOptions {
  routes: Routes; // possible to extend options with more props in the future
}

export function provideCore({ routes }: CoreOptions) {
  return [
    // reasonable default for most applications
    provideAnimations(),
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),

    // other 3rd party providers like NgRx, provideStore()

    // other application specific providers and setup

    // perform initialization, has to be last
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        // add init logic here...
        // kickstart processes, trigger initial requests or actions,...
      },
    },
  ];
}
