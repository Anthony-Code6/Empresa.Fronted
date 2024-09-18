import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorServerService {

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      // console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El servidor retornó un código de error
      /*
      console.error(
        `Código de error ${error.status}, ` +
        `body: ${JSON.stringify(error.error)}`);
      */


      //swal('Error', error.error.mensajeError, 'error')

      if (error.status == 0) {
        Swal.fire({
          title: "Error",
          text: "El servidor esta desconectado",
          icon: "error"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: error.error.mensajeError,
          icon: "error"
        });
      }
    }
    // Devuelve un observable con un mensaje de error
    return throwError('');
  }
}
