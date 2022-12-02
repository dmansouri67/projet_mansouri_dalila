import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Catalogue } from '../interface/catalogue';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  env = environment;

  postClient (){}
  getClient(){}
  postLogin(){}

  getCatalogue() : Observable<Catalogue[]>{
    return this.http.get<Catalogue[]>(this.env.catalogue);
  } 
}
