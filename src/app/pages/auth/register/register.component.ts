import { Component, inject } from '@angular/core';
import { ToolbarComponent } from "../../../shared/toolbar/toolbar.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ToolbarComponent, ReactiveFormsModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLinear = true;

  private _formBuilder = inject(FormBuilder);
  firstFormGroup!: FormGroup
  secondFormGroup!: FormGroup


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
