import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastModule, ToasterPosition } from 'ng-angular-popup'
import { LoadingComponent } from "./shared/loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgToastModule, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Multi Empresa';
  ToasterPosition = ToasterPosition;

}
