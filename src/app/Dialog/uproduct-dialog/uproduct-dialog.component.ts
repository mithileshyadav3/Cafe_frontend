import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../Component/login/login.component';
import { CreateUserComponent } from '../../Admin/create-user/create-user.component';
import { ForupdatedproductformComponent } from '../../Component/forupdatedproductform/forupdatedproductform.component';

@Component({
  selector: 'app-uproduct-dialog',
  standalone:true,
  imports: [],
  templateUrl: './uproduct-dialog.component.html',
  styleUrl: './uproduct-dialog.component.css'
})
export class UproductDialogComponent {
  constructor(private matdialog:MatDialog){}
openDialog() {
  this.matdialog.open(ForupdatedproductformComponent,{
   width:'700px',
   height:'300px'

  })
}
  


}
