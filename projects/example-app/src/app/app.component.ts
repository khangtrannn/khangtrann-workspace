import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'mktrann-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<mktrann-main-layout />`,
})
export class AppComponent {}
