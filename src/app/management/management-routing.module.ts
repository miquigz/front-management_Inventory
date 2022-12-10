import { AnalisisComponent } from './pages/analisis/analisis.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'employees',
    component: EmployeesComponent
  },
  {
    path:'reports',
    component: AnalisisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
