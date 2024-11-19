import { Component, computed, Input, input } from '@angular/core';

import { Art } from './arts/art.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Art-Project';
  art = input.required<Art>();

  imagePath = computed(() => 'arts/' + this.art().arty)
  service: any;

}
