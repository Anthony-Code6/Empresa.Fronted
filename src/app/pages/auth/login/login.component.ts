import { Component, inject } from '@angular/core';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadingComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  verPassword: Boolean = false

  private spinner = inject(NgxSpinnerService)

  login() {
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
    }, 4000);
  }

   /* Ocultar y Mostrar Contraseña */
   mostrarPassword(e: Event) {
    let target = e.target as HTMLElement
    let name = target.className

    if (name == 'bi bi-eye-slash-fill') {
      target.classList.remove('bi-eye-slash-fill')
      target.classList.add('bi-eye-fill')
      this.verPassword = true
    } else {
      target.classList.remove('bi-eye-fill')
      target.classList.add('bi-eye-slash-fill')
      this.verPassword = false
    }
  }
}
