import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  ReactiveFormsModule } from '@angular/forms';
  import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ForgetpasswordService } from '../../Service/forgetpassword.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent implements OnInit {
      constructor(private fpassService:ForgetpasswordService,private router:Router){}
      isSubmitted=false;
      formgroup!:FormGroup
    

Mismatch(newpassword: string, cnfpass: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const formGroup = control as FormGroup;
    const newPassCtrl = formGroup.get(newpassword);
    const cnfPassCtrl = formGroup.get(cnfpass);

    if (!newPassCtrl || !cnfPassCtrl) {
      return null;
    }

    // keep existing errors except mismatch
    if (cnfPassCtrl.errors && !cnfPassCtrl.errors['Mismatch']) {
      return null;
    }

    if (newPassCtrl.value !== cnfPassCtrl.value) {
      cnfPassCtrl.setErrors({ Mismatch: true });
      return { Mismatch: true };
    } else {
      cnfPassCtrl.setErrors(null);
      return null;
    }
  };
}

    ngOnInit(): void {
  this.formgroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),

      newpassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&*()]).{8,}$'
        )
      ]),

      cnfpass: new FormControl('', [Validators.required])
    },
    {
      validators: this.Mismatch('newpassword', 'cnfpass') // ✅ fixed
    }
  );
}

      SubmitForm(){
         this.isSubmitted=true
        if(this.formgroup.valid){
         this.fpassService.ResetPassword(this.formgroup.value).subscribe(()=>{
          alert("reset password successfully")
          this.router.navigate(['/'])
         })

        }
      }
}
