import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgOptimizedImage } from '@angular/common'
import { ToolbarComponent } from '../../../shared/toolbar/toolbar.component';
import { NgToastModule, NgToastService } from 'ng-angular-popup'
import { LoadingComponent } from '../../../shared/loading/loading.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage, ToolbarComponent, NgToastModule, LoadingComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy {

  logoDefault: String = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-8b135.appspot.com/o/ecommerce%2Fecommerce.png?alt=media&token=94827f3e-128d-46d1-b7c7-5bf2afe95bff'
  logoNew !: String


  form!: FormGroup
  formulario = inject(FormBuilder)

  private toast = inject(NgToastService)

  ngOnInit() {
    this.form = this.formulario.group({
      sociales: this.formulario.array([])
    });
  }

  ngOnDestroy() {

  }

  /* Redes Sociales Array */

  get redesSociales() {
    return this.form.controls["sociales"] as FormArray;
  }

  addRedesSociales() {
    const lessonForm = this.formulario.group({
      social: ['1', [Validators.required]],
      descripcion: ['', [Validators.required]]
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

    if (this.form.valid) {
      console.log(this.form.value);
    }


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

    //const base64 = document.getElementById('logobase64') as HTMLInputElement
    //base64.value = ''

    this.logoNew = ''
  }

  /* Seleccionar el archivo */
  LeerArchivo(e: Event) {
    const target = e.target as HTMLInputElement

    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();

      console.log(file.size);

      if (file.size >= 56320) {

        this.toast.danger("El archivo supero a los 55Kb permitido por el sistema");
        this.reloadSeleccion()
      } else {

        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result as string;

          // Agrega base 64 en la img
          const imagen = document.getElementById('imagen_seleccionada') as HTMLInputElement
          imagen.src = result

          //Agrega el contenido a input
          const base64 = document.getElementById('logobase64') as HTMLInputElement
          //base64.value = result

          this.logoNew = result
        };
      }
    }

  }
}
