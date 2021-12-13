import { Magasin } from './../model/Magasin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  public getMagasins(): Observable<Magasin[]> {
    return this.http.get<Magasin[]>(`${this.apiServerUrl}/Magasin/all`)
  }
  public addMagasins(magasin: Magasin): Observable<Magasin> {
    return this.http.post<Magasin>(`${this.apiServerUrl}/Magasin/add`, magasin)
  }

}
