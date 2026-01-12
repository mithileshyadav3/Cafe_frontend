import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
   baseurl:string='http://localhost:9090/forgetpassword'
  //  otpverify:string='http://localhost:9090/forgetpassword/verify-otp'
  // http://localhost:9090/forgetpassword/reset-password
  constructor(private http:HttpClient) { }
  GetOtp(email:string){
   return this.http.post(`${this.baseurl}/verifymail/${email}`,null)
  }
  OTPVerify(data:any){
    return this.http.post(`${this.baseurl}/verify-otp`,data,  { responseType: 'text' })
  }
  ResetPassword(data:any){
    return this.http.post(`${this.baseurl}/reset-password`,data,{responseType:'text'})
  }
}
