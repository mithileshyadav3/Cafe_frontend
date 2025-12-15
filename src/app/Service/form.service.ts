import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
    register:string='http://localhost:9090/adduser'
    login:string='http://localhost:9090/login'
  constructor(private http:HttpClient) { }

  Register(data:string){
   return this.http.post(this.register,data);
  }
  Login(data:any){
    return this.http.post(this.login,data,{responseType:'text'})
  }
}
