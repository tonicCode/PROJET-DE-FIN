import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BarDeNav } from "./shared/component/navigation/bar-de-nav/bar-de-nav";
import { ExoComponent } from "./shared/component/exo-component/exo-component";
import { ContactComposant } from './shared/component/contact-composant/contact-composant';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,BarDeNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetEcriture');
}
