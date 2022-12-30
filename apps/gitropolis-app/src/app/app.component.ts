import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gitropolis-root',
  standalone: true,
  template: `
    <div class="container-lg p-responsive">
      <h1>Gitropolis</h1>
    </div>
    <router-outlet></router-outlet>  `,
  styles: [],
  imports: [
    RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'gitropolis-app';
}
