import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../Service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  captchaImage:string=''
RegisterPage() {
this.router.navigate(['/register'])

}
  loginForm!:FormGroup
  constructor(private service:FormService,private router:Router){}
ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      captcha:new FormControl('',[Validators.required])
      

    })
    this.getCaptchaImage();
}
onLogin(){
  this.service.Login(this.loginForm.value).subscribe((data:any)=>{
    console.log(data)
    console.log(this.loginForm.value)
     // ✅ Make sure token exists
      if (!data || typeof data !== 'string' || !data.includes('.')) {
        alert('Login failed: Invalid response');
        // return;
      }
    alert("login successfully");
    localStorage.setItem('token',data)
    const token=localStorage.getItem("token")
    const payload=JSON.parse(atob(token!.split('.')[1]))
    const roles=payload.role;
    if(roles==="ADMIN")
    {
    this.router.navigate(['/admin'])
    }
    else if(roles==="USER"){
      this.router.navigate(['/prod'])
    }
    else{
      alert("Roles are not found")
    }
  })

}
forgetpassword(){
  this.router.navigate(['/resetpassword'])
}
getCaptchaImage(){
  this.service.getCaptcha().subscribe((res)=>{
    console.log("captch response"+res);
    this.captchaImage=res.image;
  })
}
}
