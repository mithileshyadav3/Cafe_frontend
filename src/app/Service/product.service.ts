import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
     addprod:string='http://localhost:9090/products/addprod'
     getrpoduct:string='http://localhost:9090/products/allprod'
     
  constructor(private http:HttpClient) { }
Addproduct(formData: FormData){
  return this.http.post(this.addprod,formData,{responseType:'text'})
}
allProducts(){
  return this.http.get(this.getrpoduct);
}
updateProduct(id:any,data:FormData){
   return this.http.put(`http://localhost:9090/products/updateprod/${id}`,data)
   
}
deleteProduct(id:number){
  return this.http.delete(`http://localhost:9090/products/deleteprod/${id}`,{responseType:'text'})
}

searchProduct(keyword: string) {
  return this.http.get(`http://localhost:9090/products/searchproduct?keyword=${keyword}`);
}




}
