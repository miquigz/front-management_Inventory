import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';

const ELEMENT_DATA:any = [
  {code:'B834', name:'Sprite' , price: 1.99, iva:0.21 ,stock: 10, source: 'Coca Cola Company', description:'Sprite drink', category:'Drinks', restock:280},
  {code:'B831', name: 'Fanta', price: 1.99, iva:0.21 ,stock: 10, source: 'Coca Cola Company', description:'Fanta drink', category:'Drinks', restock:280},
  {code:'B832', name: 'Pepsi', price: 1.99, iva:0.21, stock: 10, source: 'Pepsi Company', description:'Pepsi drink', category:'Drinks', restock:280},
  {code:'B834', name: '7up', price: 1.99, iva:0.21, stock: 10, source: 'Pepsi Company', description:'7up drink', category:'Drinks', restock:280},
  {code:'B836', name: 'Pepsi', price: 1.99, iva:0.21, stock: 10, source: 'Pepsi Company', description:'Pepsi drink', category:'Drinks', restock:280},
  {code:'B837', name: '7up', price: 1.99, iva:0.21, stock: 10, source: 'Pepsi Company', description:'7up drink', category:'Drinks', restock:280},
  {code:'B830', name: 'Pepsi', price: 1.99, iva:0.21, stock: 10, source: 'Pepsi Company', description:'Pepsi drink', category:'Drinks', restock:280},
  {code:'B839', name: '7up', price: 1.99, iva:0.21, stock: 10, source: 'Pepsi Company', description:'7up drink', category:'Drinks', restock:280},
  {code:'B832', name: 'Pepsi', description:'Pepsi drink', iva:0.21, price: 1.99, stock: 10, category:'Drinks', source: 'Pepsi Company', restock:280},
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'code', 'name', 'description', 'price','iva','finalPrice', 'stock','restock','category', 'source', 'edit', 'delete'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(public dialog: MatDialog) { }



  onAdd(){
    console.log("add product");
  }

  openModal(){
    console.log("open modal");
    this.dialog.open(NewProductFormComponent);
  }

  onEdit(code:string){
    console.log(code);
    //TODO: Sweet alert to edit.
  }

  onDelete(code:string){
    console.log(code);
    //TODO: Sweet alert, confirm delete.
  }

}