import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { of } from 'rxjs';
import { routes } from './routes';

@Component({
  selector: 'dip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet]
})
export class AppComponent {
  title = 'directives-in-practice';

  pages$ = of(
    routes
    .flatMap(x => x.children?.map(child => ({...child, url: `${x?.path}/${child?.path}`})))
    .map((route) => ({
      label: route?.data ? route.data['label'] : null,
      url: route?.url,
      icon: null
    }))
    .sort(
      (a, b) => {
        const nameA = a.label.toUpperCase(); // ignore upper and lowercase
        const nameB = b.label.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }
    )
  );
}
