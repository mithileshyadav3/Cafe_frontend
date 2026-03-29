import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymenturl:string="http://localhost:9090/payment/paid/5?paymentvar=creditcard"
  constructor(private http:HttpClient) { }
  Payment(id:number,method:string){
     return this.http.post(`http://localhost:9090/payment/paid/${id}?paymentvar=${method}`,{}, { responseType: 'text' } )
  }
}
