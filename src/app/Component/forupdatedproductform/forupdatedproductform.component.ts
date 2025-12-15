import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../Service/product.service';


@Component({
  selector: 'app-forupdatedproductform',
  imports: [ReactiveFormsModule],
  templateUrl: './forupdatedproductform.component.html',
  styleUrl: './forupdatedproductform.component.css'
})
export class ForupdatedproductformComponent implements OnInit {

  dialogRef = inject(MatDialogRef<ForupdatedproductformComponent>);
  data = inject(MAT_DIALOG_DATA);
  productService = inject(ProductService);

  productForm!: FormGroup;
  selectedImage: File | null = null;

  ngOnInit(): void {

    // Step 1: Create the form
    this.productForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      status: new FormControl(''),
      price: new FormControl('')
    });

    // Step 2: Patch data received from dialog
    if (this.data) {
      this.productForm.patchValue({
        name: this.data.name,
        category: this.data.category,
        status: this.data.status,
        price: this.data.price
      });
    }
  }

  // capture uploaded image
  onFileChange(event: any) {
    this.selectedImage = event.target.files[0];
  }

 onSubmit() {
  const formData = new FormData();

  formData.append("name", this.productForm.get("name")?.value);
  formData.append("category", this.productForm.get("category")?.value);
  formData.append("status", this.productForm.get("status")?.value);
  formData.append("price", this.productForm.get("price")?.value);

  if (this.selectedImage) {
    formData.append("image", this.selectedImage);
  }

  const id = this.data.id;  
  console.log("Updating product with ID:", id);

  // ❗Correct call
  this.productService.updateProduct(id, formData).subscribe({
    next: (updatedData) => {
      alert("Product updated successfully!");
      this.productService.allProducts();
      this.dialogRef.close();
    },
    error: (err) => {
      console.error("Update error:", err);
      alert("Failed to update product");
    }
  });

  console.log("Updated Form:", this.productForm.value);
}


  onCancel() {
    this.dialogRef.close();
  }
}
