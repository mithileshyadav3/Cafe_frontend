import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  standalone:true,
  imports: [],
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent implements OnInit {
  constructor(private router:Router){}
   matdialogRef=inject(MatDialogRef<ViewdetailsComponent>);
    data=inject(MAT_DIALOG_DATA)
  ngOnInit(): void {
      console.log(this.data)
  }
  
close() {
this.matdialogRef.close()
}
   OrderProduct(){
    this.close()
    this.router.navigate(['/orderprod'])
   }
}
