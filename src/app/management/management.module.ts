import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { ProductsComponent } from './pages/products/products.component';
import { ManagementRoutingModule } from './management-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeFormComponent } from './pages/employees/employee-form/employee-form.component';
import { NewProductFormComponent } from './pages/products/new-product-form/new-product-form.component';


@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductsComponent,
    LayoutComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    NewProductFormComponent
  ]
})
export class ManagementModule { }
