import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-add-product',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
   selectedImage!:File
  productForm!:FormGroup
  products:any
  constructor(private fb:FormBuilder,private addprodservice:ProductService){}
  ngOnInit(): void {
     this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      status: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
onSubmit() {
 const formData=new FormData();
 formData.append('name', this.productForm.value.name);
    formData.append('category', this.productForm.value.category);
    formData.append('status', this.productForm.value.status);
    formData.append('price', this.productForm.value.price);
    formData.append('images', this.selectedImage);
    this.addprodservice.Addproduct(formData).subscribe((product=>{
      alert("addded product successfully")
      this.productForm.reset();
     this.products=product
    }))
}
onFileSelect(event:any) {
 this.selectedImage=event.target.files[0]
}
}
