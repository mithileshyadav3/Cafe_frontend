import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../Service/order.service';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  user_id!: number;
  myorderproduct: any[] = [];
  showrecit:boolean=true;
  status:string=""

  constructor(private orderservice: OrderService, private authservice: AuthService,
    private route:Router
  ) {}

  ngOnInit(): void {
    const id = this.authservice.getUserId();
    if(id!=null){
      this.user_id=id;
       this.showmyOrders();
    }
    else{
      alert("logged first! ")
    } 
   
  }

  showmyOrders() {
    this.orderservice.myOrders(this.user_id).subscribe({
      next: (myorderProd: any) => {
        this.myorderproduct = myorderProd;
        this.status=myorderProd.map((order:any)=>order.status);
        console.log(this.status);
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }
  Payment(id:number){
    this.route.navigate(['/payment',id]);
  }
  downloadReceit(id:number){
      this.orderservice.pdfGeneration(id).subscribe({
           next: (res: Blob) => {
      const url = window.URL.createObjectURL(res);
      const a = document.createElement('a');
      a.href = url;
      a.download = `order_${id}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    },
    error: (err) => {
      console.error(err);
      alert('PDF download failed');
    }
      })
  }
}