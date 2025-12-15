import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  allproduct:string='http://localhost:9090/allprod'
  AllProduct(){
   return this.http.get(this.allproduct)
  }
}
