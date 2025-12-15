import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewdetails',
  standalone:true,
  imports: [],
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent implements OnInit {
   matdialogRef=inject(MatDialogRef<ViewdetailsComponent>);
    data=inject(MAT_DIALOG_DATA)
  ngOnInit(): void {
      console.log(this.data)
  }
  
close() {
this.matdialogRef.close()
}
   
}
