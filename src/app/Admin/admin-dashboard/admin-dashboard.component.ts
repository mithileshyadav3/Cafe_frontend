import { Component } from '@angular/core';
import { CreateUserComponent } from "../create-user/create-user.component";
import { ViewUserComponent } from "../view-user/view-user.component";
import { AddProductComponent } from "../add-product/add-product.component";
// import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
// import { NgIf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-admin-dashboard',
  standalone:true,
  imports: [CreateUserComponent, ViewUserComponent, AddProductComponent,NgIf],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private router:Router){}
Logout() {
 const result= confirm("Are you sure logout")
  if(result){
  localStorage.removeItem('token')
  this.router.navigate(['/'])
  }
}
     selecttab:'viewuser'|'createuser'|'addproduct'='createuser'
  
}
