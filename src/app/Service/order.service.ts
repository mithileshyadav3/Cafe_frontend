import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   baseUrl:string='http://localhost:9090/orders/place'
               
  constructor(private http:HttpClient) { }
   OrderItems(userId:number,formvalue:any){
   return this.http.post(`${this.baseUrl}?userId=${userId}`,formvalue)
   }
    pdfGeneration(orderId:number){
      return this.http.get(`http://localhost:9090/pdf/download/${orderId}`, { responseType: 'blob' })
    }
}
