import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
