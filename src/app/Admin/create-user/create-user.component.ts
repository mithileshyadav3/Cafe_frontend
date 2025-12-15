import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ForupdatedproductformComponent } from '../../Component/forupdatedproductform/forupdatedproductform.component';


@Component({
  selector: 'app-create-user',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  filterproducts:any[]=[]
searchProduct($event:Event) {
    const input=$event.target as HTMLInputElement
    const input_value=input.value
          this.filterproducts=this.products.filter(product=>{
                if(product.name.toLowerCase().includes(input_value.toLowerCase()))
                return product;
              })
    
}
  ngOnInit(): void {
      this.Products()
  }

  products:any[]=[]
 constructor(private prodservice:ProductService,private matdialog:MatDialog){}
   Products(){
    this.prodservice.allProducts().subscribe((prod:any)=>{
      this.products=prod
      this.filterproducts=this.products
    })
   }
   deleteProduct(id:number) {
    
 const isConfirm = confirm("Are you sure you want to delete this product?");
     if(isConfirm){
     this.prodservice.deleteProduct(id).subscribe((res)=>{
      alert("Product Delete successfully")
      this.Products()
     })
     
    }
}
editProduct(product: any) {
  this.matdialog.open(ForupdatedproductformComponent,{
    data:product
  })

}
}
