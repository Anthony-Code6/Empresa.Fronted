import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggeIn() {
    const token = this.getToken()
    if (!token) return false

    return !this.isTokenExpired()
  }

  private isTokenExpired() {
    const token = this.getToken()
    if (!token) return true

    const decode = jwtDecode(token)
    const isTokenExpired = Date.now() >= decode['exp']! * 1000
    if (isTokenExpired) this.logout()

    return isTokenExpired
  }

  getUserDetail() {
    const token = this.getToken()
    if (!token) return null

    const decodeToken: any = jwtDecode(token)
    const userDetail = {
      id: decodeToken.Field03,
      name: decodeToken.Field02,
      fullname: decodeToken.Field01,
      rol: decodeToken.Field05
    }
    return userDetail
  }

  getRol() {
    const token = this.getToken()
    if (!token) return null

    const decodeToken: any = jwtDecode(token)
    return decodeToken.Field05 as string
  }

  logout() {
    localStorage.removeItem('token')
  }

  private getToken() {
    return localStorage.getItem('token')
  }

}
