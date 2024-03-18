import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'mktrann-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [
    // template context (everything we have used in the template...)
    // Angular
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    TitleCasePipe,

    // material
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MainLayoutComponent {}
