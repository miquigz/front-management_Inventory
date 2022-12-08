import { Subscription } from 'rxjs';
import { GestionService } from './../../../services/gestion.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit, OnDestroy {

  editProductForm!:FormGroup;
  subProdAct!:Subscription;

  actualCode:string = '';

  constructor(public dialogRef: MatDialogRef<EditProductFormComponent>,
              private fs:FormBuilder,
              private gestionService:GestionService,
              @Inject(MAT_DIALOG_DATA) public data: any
              ) { }

  ngOnInit(): void {
    this.editProductForm = this.fs.group({
      code:['', [Validators.required, Validators.minLength(3),  this.noWhiteSpaceValidator]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description:['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      price: ['', [Validators.required]],
      stock:['', [Validators.required]],
      category: ['', [Validators.required]],
      monthlyStock:['', [Validators.required]],
      iva: [''],
      source:['']
    });
    this.subProdAct = this.gestionService.getOnlyProduct(this.data.code).subscribe({
        next: (product:any) => {
          this.actualCode = product.code;
          this.editProductForm.patchValue({
            code: product.code,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category,
            monthlyStock: product.monthlyStock,
            iva: product.iva,
            source: product.source
          });
        },
        error: (err:any) => { console.log(err); }
      });
    console.log(this.data.code);

  }


  ngOnDestroy(): void {
    this.subProdAct.unsubscribe();
  }

  close(){
    this.gestionService.updateProduct(this.editProductForm.value)
    .subscribe({
      next:(data) => console.log(data),
      error:(error) => console.log(error)//TODO: Messagge error front
    });
    this.dialogRef.close();
  }


  public noWhiteSpaceValidator(control: FormControlName) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}


}



