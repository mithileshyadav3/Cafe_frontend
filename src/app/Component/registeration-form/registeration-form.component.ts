
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../Service/form.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registeration-form',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registeration-form.component.html',
  styleUrl: './registeration-form.component.css'
})
export class RegisterationFormComponent implements OnInit{
loginPage() {
  this.router.navigate(['/'])
}       isSubmitted=false;
      formgroup!:FormGroup
      constructor(private formservice:FormService,private router:Router){}
     ngOnInit(): void {

    this.formgroup = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^(?=.*[a-z])(?=.*[0-9]).{3,}$')]),
      password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&*]).{8,}$')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      fullname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      // role: new FormControl('USER', [Validators.required]),

      // ✔ address should be FormArray
      address: new FormArray([
        new FormGroup({
          building_name: new FormControl(''),
          road_no: new FormControl(''),
          city: new FormControl(''),
          pincode: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{6}$')]),
          state: new FormControl('')
        })
      ])
    });

  }

      onSubmit(){
        this.isSubmitted=true;
        if (this.formgroup.invalid) {
    this.formgroup.markAllAsTouched();  // show validation errors
    return;   // STOP HERE, DO NOT SUBMIT
  }
        console.log(this.formgroup.value)
       this.formservice.Register(this.formgroup.value).subscribe((res:any)=>{
        alert("Registration successfully");
        this.router.navigate(['/'])
       })
      }
}
