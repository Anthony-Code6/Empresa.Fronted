import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorServerService {

  private toast = inject(NgToastService)

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El servidor retornó un código de error
      console.error(
        `Código de error ${error.status}, ` +
        `body: ${JSON.stringify(error.error)}`);

      this.toast.danger(error.error.mensajeError)
      //swal('Error', error.error.mensajeError, 'error')
    }
    // Devuelve un observable con un mensaje de error
    return throwError('');
  }
}
