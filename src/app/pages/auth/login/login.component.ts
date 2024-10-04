import { Component, inject } from '@angular/core';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadingComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup
  formulario = inject(FormBuilder)
  verPassword: Boolean = false

  private router = inject(Router)
  private spinner = inject(NgxSpinnerService)
  private toast = inject(NgToastService)

  ngOnInit(): void {
    this.form = this.formulario.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    })
  }

  login() {
    if (this.form.valid) {
      this.spinner.show()
      const email = this.form.controls['email'].value
      setTimeout(() => {
        this.spinner.hide()
        this.toast.success(email, 'success', 2000)
        this.form.reset()
        this.router.navigateByUrl('/register')
      }, 4000);
    }
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
