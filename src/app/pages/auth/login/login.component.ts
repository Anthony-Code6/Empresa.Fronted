import { Component, inject } from '@angular/core';
import { LoadingComponent } from '../../../shared/loading/loading.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
}
