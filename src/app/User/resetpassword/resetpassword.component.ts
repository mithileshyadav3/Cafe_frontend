import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetpasswordService } from '../../Service/forgetpassword.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent implements OnInit {
  show=false
  buttonshow=true

  constructor(private fgpass:ForgetpasswordService,private router:Router){}
  formgroup!:FormGroup
 ngOnInit(): void {
      this.formgroup=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.email]),
        otp:new FormControl('')
      })
 }
 getOtp() {
  
  if(this.formgroup.invalid){
    alert("valid enter email ")
    return
  }
    const email=this.formgroup.value.email
  this.fgpass.GetOtp(email).subscribe((res)=>{
    alert("OTP sent on your email")
    this.show=true
  })
  
}
verifyEmailotp(){
  if(this.formgroup.invalid){
    alert("pls enter valid")
    return
  }
  this.fgpass.OTPVerify(this.formgroup.value).subscribe((res)=>{
  
    this.router.navigate(['/forgetpassword'])
  })
}
}
