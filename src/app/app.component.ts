import { Component } from '@angular/core';
import { JogoDaVelhaComponent } from './jogo-da-velha';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JogoDaVelhaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
