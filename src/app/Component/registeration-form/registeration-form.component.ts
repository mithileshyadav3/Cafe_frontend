
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../Service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration-form',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './registeration-form.component.html',
  styleUrl: './registeration-form.component.css'
})
export class RegisterationFormComponent implements OnInit{
loginPage() {
  this.router.navigate(['/'])
}
      formgroup!:FormGroup
      constructor(private formservice:FormService,private router:Router){}
     ngOnInit(): void {

    this.formgroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      fullname:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      // role: new FormControl('USER', [Validators.required]),

      // ✔ address should be FormArray
      address: new FormArray([
        new FormGroup({
          building_name: new FormControl(''),
          road_no: new FormControl(''),
          city: new FormControl(''),
          pincode: new FormControl(''),
          state: new FormControl('')
        })
      ])
    });

  }

      onSubmit(){
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
