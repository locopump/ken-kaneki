import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private urlGeneros = '/intranet/administracion/general/gender-likes';
  private urlVisitorGenders = '/intranet/administracion/general/visitors-resumen';
  private urlMarcasCategoria = '/intranet/administracion/general/tenants/categories';

  constructor(private http: HttpClient) { }

  cargarGeneros() {
    const url = environment.apiURL + this.urlGeneros;
    return this.http.get(url);
  }

  cargarVisitorGender() {
    const url = environment.apiURL + this.urlVisitorGenders;
    return this.http.get(url);
  }

  cargarMarcasCategoria() {
    const url = environment.apiURL + this.urlMarcasCategoria;
    return this.http.get(url);
  }
}
