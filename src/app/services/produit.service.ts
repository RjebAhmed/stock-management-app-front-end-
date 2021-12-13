import { Produit } from './../model/Produit';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/Produit/all`)
  }
  public addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiServerUrl}/Produit/add`, produit)
  }
  public getMagasinProduit(id:number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/Produit/find/${id.toString()}`)
  }
  public deleteProduit(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Produit/delete/${id.toString()}`)
  } 
}
