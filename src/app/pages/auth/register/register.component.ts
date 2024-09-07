import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgOptimizedImage } from '@angular/common'
import { ToolbarComponent } from '../../../shared/toolbar/toolbar.component';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, NgOptimizedImage, ToolbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private message = inject(MatSnackBar);

  logoDefault: String = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-f0e8c.appspot.com/o/logo%2Fdefault.jpg?alt=media&token=6026260e-59e9-4b01-b822-c2f0f6cd58c4'
  logoNew !: String

  form!: FormGroup
  formulario = inject(FormBuilder)

  ngOnInit() {
    this.form = this.formulario.group({
      sociales: this.formulario.array([])
    });


  }

  get redesSociales() {
    return this.form.controls["sociales"] as FormArray;
  }

  addRedesSociales() {
    const lessonForm = this.formulario.group({
      social: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

    this.redesSociales.push(lessonForm);
  }

  deleteRedesSociales(lessonIndex: number) {
    this.redesSociales.removeAt(lessonIndex);
  }


  /* Registro de Informacion */
  guardarEmpresa() {
    /*
    this.message.open('Completado', 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration:2000
    });
    */

    console.log(this.form.value);
  }

  /* Cambio de Icono de desplegue */
  desplegue(e: Event) {
    let target = e.target as HTMLElement
    let name = target.className

    if (name == 'bi bi-caret-up-fill') {
      target.classList.remove('bi-caret-up-fill')
      target.classList.add('bi-caret-down-fill')
    } else {
      target.classList.remove('bi-caret-down-fill')
      target.classList.add('bi-caret-up-fill')
    }
  }

  /* Reiniciar Seleccion de archivo */
  reloadSeleccion() {
    const imagen = document.getElementById('imagen_seleccionada') as HTMLInputElement
    imagen.src = this.logoDefault.toString()

    const base64 = document.getElementById('logobase64') as HTMLInputElement
    base64.value = ''

    this.logoNew = ''
  }

  /* Seleccionar el archivo */
  LeerArchivo(e: Event) {
    const target = e.target as HTMLInputElement

    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;

        // Agrega base 64 en la img
        const imagen = document.getElementById('imagen_seleccionada') as HTMLInputElement
        imagen.src = result

        //Agrega el contenido a input
        const base64 = document.getElementById('logobase64') as HTMLInputElement
        base64.value = result

        this.logoNew = result
      };
    }

  }
}
