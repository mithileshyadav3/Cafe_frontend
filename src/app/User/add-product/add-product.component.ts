import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import {  FormControl, ReactiveFormsModule } from '@angular/forms';

import { ProductService } from '../../Service/product.service';
import { debounceTime, filter, switchMap } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-add-product',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {


  filterproducts:any[]=[];
      searchControl:FormControl=new FormControl("")
   suggestions:any[]=[]
  currentpage=1;
  itemsperpage=4;
  totalpages=0;

   constructor(private api:ApiService,private router:Router,private matdialog:MatDialog,private productservice:ProductService){
    
   }
   ngOnInit(): void {
      this.AllProducts()
      this.searchControl.valueChanges.pipe(
      
        debounceTime(1000),
        filter((search:string)=>search.trim().length>2),

    switchMap((search)=> this.productservice.searchProduct(search))).subscribe((res:any)=>{
          this.paginationProducts=res
      
     
     })
    
   }
   products:any[]=[]
   paginationProducts:any[]=[]
   AllProducts(){
    this.api.AllProduct().subscribe((data:any)=>{
     this.products=data;
     this.filterproducts=this.products
     this.totalpages=Math.ceil(this.products.length/this.itemsperpage)
     this.updatePage();
    
    })
   }
   viewDetails(product:any) {
    this.matdialog.open(ViewdetailsComponent,{
 data:product,
 maxHeight: '100vh', 
 width:'700px'
}
    )
 
    
}
   loginPage() {
  this.router.navigate(['/'])

}
logoutPage() {
  const result=confirm("Are you sure want to logout")
  if(result){
localStorage.removeItem('token')
this.router.navigate(['/'])
  }

   
}
updatePage(){
 const start=(this.currentpage-1)*this.itemsperpage
 const end=start+this.itemsperpage;
 this.paginationProducts=this.filterproducts.slice(start,end)
}
prev() {
if (this.currentpage > 1) {
    this.currentpage--;
    this.updatePage();
  }}
next() {
 if (this.currentpage < this.totalpages) {
    this.currentpage++;
    this.updatePage();
  }
}
// searchfunctionality($event:Event) {
//      const inputs=$event.target as HTMLInputElement
//     const input=inputs.value
//     this.filterproducts=this.products.filter(product=>{
//       if(product.name.toLowerCase().includes(input.toLowerCase())){
//         return product;
//       }
     
//     })
    
// }
profilePage() {
  this.matdialog.open(ProfileComponent,{
    width:'700px',
    maxHeight:'100vh'
  })
}
}