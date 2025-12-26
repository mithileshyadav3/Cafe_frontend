import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../../Service/auth.service';


@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit{
  
  constructor(private authservice:AuthService,private fb:FormBuilder){}

    matdialogRef=inject(MatDialogRef<ProfileComponent>)
formgroup!: FormGroup;
 profileData:any =[];
ngOnInit(): void {
      //this id fetch from the token
    const userid=this.authservice.getUserId();

  this.initForm()  
  this.LoggedData()
}
initForm(){
  this.formgroup=this.fb.group({
    name:[''],
    Phone:[''],
    address:this.fb.group({
building_name: [''],
      road_no: [''],
      city: [''],
      pincode: [''],
      state: ['']
    })
    
  })
}
LoggedData(){
  this.authservice.loggedinData().subscribe((res)=>{
   this.profileData=res;
   console.log(this.profileData)
   this.formgroup.patchValue({
    name:this.profileData.username,
    // email:this.profileData.,
    Phone:this.profileData.phone,
    address:this.profileData.address?.[0]
      // address: this.profileData.address?.[0]?.city
   })
  })
}
    Cancel(){
      this.matdialogRef.close()
    }
    SubmitForm() {
      if(this.formgroup.valid){
        const payload = {
    fullname: this.formgroup.value.name,
    phone: this.formgroup.value.phone,
    address: [ this.formgroup.value.address ] // ✅ ARRAY
  };
       this.authservice.updateProfile(payload).subscribe((res)=>{
        alert("profile update successfully")
        
       })
      }

}
}
