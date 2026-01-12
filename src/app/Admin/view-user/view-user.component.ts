import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../Service/userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-user',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {
  constructor(private userservice:UserserviceService){}
  users:any[]=[]
  ngOnInit(): void {
      this.allUsers();
  }

  allUsers(){
    this.userservice.Allusers().subscribe((res:any)=>{
      
      this.users=res;
  
  
    })
  }
}
