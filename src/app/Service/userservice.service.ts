import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
      usrs:string='http://localhost:9090/users/usersonly'
  constructor(private http:HttpClient) { }
   Allusers(){
    return this.http.get(this.usrs)
   }
   UserSeach(searchuser:string){
    return this.http.get(`http://localhost:9090/users/username?username=${searchuser}`)
   }

}
