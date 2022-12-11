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

  newProductForm:FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<NewProductFormComponent>,
              private fs:FormBuilder,
              private gestionService:GestionService
              ) { }

  ngOnInit(): void {
    this.newProductForm = this.fs.group({
      code:            ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name:            ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      description:     ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      price:           ['', [Validators.required, Validators.min(0)]],
      acquisitionPrice:['', [Validators.required, Validators.min(0)]],
      stock:           ['', [Validators.required, Validators.min(0)]],
      category:        ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      monthlyStock:    ['', [Validators.required]],
      iva:             ['', [Validators.min(0)]],
      source:          ['', [Validators.minLength(3), Validators.maxLength(10)]]
    });
  }

  onSubmit(form:FormGroup){
    if(form.valid){
      this.gestionService.createProduct(this.newProductForm.value)
      this.dialogRef.close();
    }
  }


}
