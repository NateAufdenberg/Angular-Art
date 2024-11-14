import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ArtComponent } from './art/art.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Art-Project';
}
