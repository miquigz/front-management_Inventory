import { EmployeesComponent } from './pages/employees/employees.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'productos',
        component: ProductsComponent
      },
      {
        path:'empleados',
        component: EmployeesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
