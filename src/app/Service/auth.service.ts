import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
// this url only for who login
     loggedin:string='http://localhost:9090/users/profile'

     updateprofile:string='http://localhost:9090/users/update'
  constructor(private http :HttpClient) { }
  decodeToken():any{
    const token=localStorage.getItem('token');
    if(!token)return null;
    return jwtDecode(token)
  }
  getUserId(): number | null{
const decoded=this.decodeToken();
return decoded?.userId??null;
  }
   loggedinData(){
    return this.http.get(this.loggedin)
   }
   updateProfile(data:any){
    return this.http.put(this.updateprofile,data)
   }
}
