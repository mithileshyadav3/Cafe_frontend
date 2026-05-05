import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../Service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone:true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
       constructor(private payservice:PaymentService,private route:ActivatedRoute,private routes:Router){}
       orderitemid:number=0;
       selectmethod:string=""
       ngOnInit(): void {
          this.orderitemid=Number(this.route.snapshot.paramMap.get('id')) 
          
       }
       selectMethod(method:string){
        this.selectmethod=method;
        console.log(this.selectmethod)
       }
       Pay(){
        if(!this.selectmethod){
          alert("Please Select Method")
          return;
        }
         this.payservice.Payment(this.orderitemid,this.selectmethod).subscribe({
          next:(res)=>{
            console.log("Response"+res)
             alert("payment success");
                 this.routes.navigate(['/myorders'])
          },
          error:(err)=>{
            console.error(err)
            alert("Payment failed")
            
          }
         })
       }
}
