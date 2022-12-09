import { GestionService } from './../../../services/gestion.service';
import { Product } from './../../../interfaces/product';
import { Subscription, switchMap } from 'rxjs';
import { ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-stocks',
  templateUrl: './chart-stocks.component.html',
  styleUrls: ['./chart-stocks.component.scss']
})
export class ChartStocksComponent implements OnInit {

  dataCategories:number[] = [0, 0];


  public pieChartOptions: ChartOptions<'pie'> = { 
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'left',
      }
  }};
  public pieChartLabels!:string[];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  private sub:Subscription = new Subscription;
  employees:Product[] = [];

  constructor(private gestionService:GestionService) {
  }

  ngOnInit(): void {
    this.sub = this.gestionService.getCategoriesProduct().
    pipe(
      switchMap( (categories:string[]) =>{
        this.pieChartLabels = categories;
        return this.gestionService.getProducts(); 
      })
    ).subscribe({
      next: (products:Product[]) => {
        //Inicializamos vec
        for (let i = 0; i < this.pieChartLabels.length; i++) 
          this.dataCategories[i] = 0;
        //Sumamos salary de cada category.
        products.forEach((prod) => {
          const indexInsert = this.pieChartLabels.findIndex((ele) => ele === prod.category );
          this.dataCategories[indexInsert] += prod.acquisitionPrice * prod.monthlyStock; //Si tiene iva, se suma.
        })
        this.pieChartDatasets = [ { data:this.dataCategories} ];
      },
      error: (error) => { console.log(error) }
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}


