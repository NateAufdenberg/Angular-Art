import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ART_GAVA } from '../artID.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ART_GAVA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Art';
}
