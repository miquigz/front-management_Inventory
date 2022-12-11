import { Subscription } from 'rxjs';
import { GestionService } from './../../../services/gestion.service';

import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit, OnDestroy {

  editProductForm!:FormGroup;
  subProdAct!:Subscription;

  noWhiteSpaceRegPattern = '^\\S*$';

  actualCode:string = '';

  constructor(public dialogRef: MatDialogRef<EditProductFormComponent>,
              private fs:FormBuilder,
              private gestionService:GestionService,
              @Inject(MAT_DIALOG_DATA) public data: any//data code (product)
              ) { }

  ngOnInit(): void {
    this.editProductForm = this.fs.group({
      code:            ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.noWhiteSpaceRegPattern)]],
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
    this.subProdAct = this.gestionService.getOnlyProduct(this.data.code).subscribe({
        next: (product:any) => {
          this.actualCode = product.code;
          this.editProductForm.patchValue({
            code: product.code,
            name: product.name,
            description: product.description,
            price: product.price,
            acquisitionPrice: product.acquisitionPrice,
            stock: product.stock,
            category: product.category,
            monthlyStock: product.monthlyStock,
            iva: product.iva,
            source: product.source
          });
        },
        error: (err:any) => { console.log(err); }
      });
  }


  ngOnDestroy(): void {
    this.subProdAct.unsubscribe();
  }

  onSubmit( form:any ){
    console.log(form);
    if (form){
      // this.gestionService.updateProduct(form)
      // .subscribe({
      //   next: (res:any) => {
      //     console.log(res);},
      //   error: (err:any) => { console.log(err); }
      // });
      this.dialogRef.close();
    }else{
      this.editProductForm.markAllAsTouched;
    }
  }
  
}



