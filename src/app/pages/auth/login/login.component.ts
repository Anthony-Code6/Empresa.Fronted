import { Component, inject } from '@angular/core';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private spinner = inject(NgxSpinnerService)

  login(){
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
    }, 4000);
  }
}
