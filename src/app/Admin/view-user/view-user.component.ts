import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../Service/userservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-user',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {
  constructor(private userservice:UserserviceService){}
  users:any[]=[]
  search:string=""
  searchusers:any[]=[]
  ngOnInit(): void {
      this.allUsers();
  }

  allUsers(){
    this.userservice.Allusers().subscribe((res:any)=>{
     this.users=res;
 })
  }
  SearchUser(){
    this.userservice.UserSeach(this.search).subscribe((res:any)=>{
     this.searchusers=res
     console.log(this.searchusers)
    })
  }
}
