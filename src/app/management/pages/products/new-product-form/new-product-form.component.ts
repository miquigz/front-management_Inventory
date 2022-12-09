import { GestionService } from './../../../services/gestion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {

  newProductForm!:FormGroup;

  constructor(public dialogRef: MatDialogRef<NewProductFormComponent>,
              private fs:FormBuilder,
              private gestionService:GestionService
              ) { }

  ngOnInit(): void {
    this.newProductForm = this.fs.group({
      code:['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description:['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      price: ['', [Validators.required]],
      acquisitionPrice: ['', [Validators.required]],
      stock:['', [Validators.required]],
      category: ['', [Validators.required]],
      monthlyStock:['', [Validators.required]],
      iva: [''],
      source:['']
    });
  }

  close(){
    this.gestionService.createProduct(this.newProductForm.value)
    .subscribe({
      next:(data) => console.log(data),
      error:(error) => console.log(error)//TODO: Messagge error front
    });
    this.dialogRef.close();
  }
}
