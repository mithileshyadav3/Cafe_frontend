import { Component, OnInit } from '@angular/core';
// import { ɵInternalFormsSharedModule } from "@angular/forms";
import { ProductService } from '../../Service/product.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Service/auth.service';
import { OrderService } from '../../Service/order.service';
// import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-order',
  standalone:true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
   
constructor(private productservice:ProductService,private authservice:AuthService,private orderservice:OrderService,private fb:FormBuilder){}
products:any=[]
orderSuccess=false
formgroup!:FormGroup
ngOnInit(): void {
     this.formgroup=this.fb.group({
      productId: ['', Validators.required],
  quantity: [1, [Validators.required, Validators.min(1)]]
     })
    this.productservice.allProducts().subscribe((res)=>{
   this.products=res;
  //  console.log(this.products)
    })
}

placeOrder() {
     const userid=this.authservice.getUserId();
     if(!userid){
      alert("user are not loggin")
      return
     }
      const orderRequest = {
    items: [
      {
        productId: this.formgroup.value.productId,
        quantity: this.formgroup.value.quantity
      }
    ]
  };
     this.orderservice.OrderItems(userid,orderRequest).subscribe({
      next:(res)=>{
        //  alert("order successfully")
        this.orderSuccess=true
        setTimeout(() => {
          this.orderSuccess=false
        }, 2000);

      },
      error:(err)=>{
        alert("some issue in order")

      }
     })
      
    
   
}
}
