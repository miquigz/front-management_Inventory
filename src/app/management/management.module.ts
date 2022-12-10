import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { NgChartsModule } from 'ng2-charts';

import { ManagementRoutingModule } from './management-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeFormComponent } from './pages/employees/employee-form/employee-form.component';
import { NewProductFormComponent } from './pages/products/new-product-form/new-product-form.component';
import { EditProductFormComponent } from './pages/products/edit-product-form/edit-product-form.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { ChartEmployeesComponent } from './pages/analisis/chart-employees/chart-employees.component';
import { ChartProductsComponent } from './pages/analisis/chart-products/chart-products.component';
import { ChartStocksComponent } from './pages/analisis/chart-stocks/chart-stocks.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule,
    ManagementRoutingModule
  ],
  declarations: [
    ProductsComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    NewProductFormComponent,
    EditProductFormComponent,
    AnalisisComponent,
    ChartEmployeesComponent,
    ChartProductsComponent,
    ChartStocksComponent
  ]
})
export class ManagementModule { }
