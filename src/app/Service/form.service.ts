import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
    register:string='http://localhost:9090/users/adduser'
    login:string='http://localhost:9090/users/login'
    
  constructor(private http:HttpClient) { }

  Register(data:string){
   return this.http.post(this.register,data);
  }
  Login(data:any){
    return this.http.post(this.login,data,{responseType:'text'})
  }
  getCaptcha() {
  return this.http.get<any>('http://localhost:9090/captcha/generate', { withCredentials: true })
    
}

}
