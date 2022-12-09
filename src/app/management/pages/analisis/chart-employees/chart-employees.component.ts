import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, switchMap } from 'rxjs';
import { ChartOptions } from 'chart.js';

import { GestionService } from './../../../services/gestion.service';
import { Employee } from './../../../interfaces/employee';



@Component({
  selector: 'app-chart-employees',
  templateUrl: './chart-employees.component.html',
  styleUrls: ['./chart-employees.component.scss']
})
export class ChartEmployeesComponent  implements OnInit, OnDestroy  {

  dataCategories:number[] = [0, 0];


  public pieChartOptions: ChartOptions<'pie'> = { responsive: false};
  public pieChartLabels!:string[];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  private sub:Subscription = new Subscription;
  employees:Employee[] = [];

  constructor(private gestionService:GestionService) {
  }

  ngOnInit(): void {
    this.sub = this.gestionService.getCategoriesEmployees().
    pipe(
      switchMap( (categories:string[]) =>{
        this.pieChartLabels = categories;
        return this.gestionService.getEmployees(); 
      })
    ).subscribe({
      next: (employee:Employee[]) => {
        //Inicializamos vec
        for (let i = 0; i < this.pieChartLabels.length; i++) 
          this.dataCategories[i] = 0;
        //Sumamos salary de cada category.
        employee.forEach((employee) => {
          const indexInsert = this.pieChartLabels.findIndex((ele) => ele === employee.occupation );
          this.dataCategories[indexInsert] += employee.salary;
        })
        this.pieChartDatasets = [ { data:this.dataCategories} ];
      },
      error: (error) => { console.log(error) }
    })


//Refactor code (anidacion de subs)
    // this.subCategories = this.gestionService.getCategoriesEmployees().subscribe({
    //   next:(data:String[]) => { 
    //     this.labelsCategories = data
    //     this.subEmployees = this.gestionService.getEmployees().subscribe({
    //       next:(data:Employee[]) => { 
    //         data.forEach((employee) => {
    //           const indexInsert = this.labelsCategories.findIndex((ele)=> ele === employee.occupation );
    //           this.dataCategories[indexInsert] += employee.salary;
    //         })
    //       },
    //       error:(error) => { console.log(error) }
    //     })
    //   },
    //   error:(error) => { console.log(error) }
    // })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
