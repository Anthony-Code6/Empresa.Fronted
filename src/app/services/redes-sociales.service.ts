import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ErrorServerService } from './error-server.service';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { RedesSociales,RedesSocialesSellst } from '../interfaces/redes-sociales';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {

  private redesSociales = new BehaviorSubject<RedesSociales[]>([])
  redSocial: RedesSociales[] = []

  private url: string = 'https://localhost:7230/api/Administrador/'
  private http = inject(HttpClient)
  private error_services = inject(ErrorServerService)

  /* Informacion dinamicas */
  clearRedesSociales() {
    this.redSocial = []
    this.redesSociales.next(this.redSocial)
  }

  setRedesSociales(redes: RedesSociales) {
    this.redSocial.push(redes)
    this.redesSociales.next(this.redSocial)
  }

  getRedesSociales(): Observable<RedesSociales[]> {
    return this.redesSociales.asObservable()
  }

  /* Peticiones */

  RedesSociales_Sellst(): Observable<RedesSocialesSellst> {
    return this.http.get<RedesSocialesSellst>(this.url + 'RedesSociales_Sellst').pipe(catchError(this.error_services.handleError))
  }
}
