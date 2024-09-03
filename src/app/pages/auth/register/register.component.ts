import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule,NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  logoDefault: String = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-f0e8c.appspot.com/o/logo%2Fdefault.jpg?alt=media&token=6026260e-59e9-4b01-b822-c2f0f6cd58c4'

  form!: FormGroup
  formulario = inject(FormBuilder)

  ngOnInit(): void {
    this.form = this.formulario.group({
      lessons: this.formulario.array([])
    });
  }

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson() {
    const lessonForm = this.formulario.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    });

    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  plus(e: Event) {
    let target = e.target as HTMLElement
    let name = target.className

    if (name == 'bi bi-plus-lg') {
      target.classList.remove('bi-plus-lg')
      target.classList.add('bi-dash')
    } else {
      target.classList.remove('bi-dash')
      target.classList.add('bi-plus-lg')
    }

  }

  /* Reiniciar Seleccion de archivo */
  reloadSeleccion() {
    const imagen = document.getElementById('imagen_seleccionada') as HTMLInputElement
    imagen.src = this.logoDefault.toString()

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

        const imagen = document.getElementById('imagen_seleccionada') as HTMLInputElement
        imagen.src = result

      };
    }

  }
}
