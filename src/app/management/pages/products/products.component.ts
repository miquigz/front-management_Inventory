import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';
import { GestionService } from './../../services/gestion.service';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit, OnInit, OnDestroy{
  displayedColumns: string[] = [ 'code', 'name', 'description', 'price', 'acquisitionPrice','iva','finalPrice', 'stock','monthlyStock','category', 'source', 'edit', 'delete'];
  // dataSource = ELEMENT_DATA;
  dataSource:MatTableDataSource<Product> = new MatTableDataSource<Product>();

  subProducts!:Subscription;
  subClosedAddProduct!:Subscription;
  subClosedEditProduct!:Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  
  constructor(public dialog: MatDialog, private gestionService:GestionService) { }

  ngOnInit(): void {
    this.refreshTable();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(){
    this.subProducts.unsubscribe();
    this.subClosedAddProduct?.unsubscribe();
    this.subClosedEditProduct?.unsubscribe();
  }

  openModal(){ //addproduct
    this.subClosedAddProduct = this.dialog.open(NewProductFormComponent)
    .afterClosed().subscribe((_)=>{
      this.refreshTable();
    });
  }

  onEdit(code:string){
    this.subClosedEditProduct = this.dialog.open(EditProductFormComponent, {
      data: {code:code}
    })
    .afterClosed().subscribe((_)=>{
      this.refreshTable();
    });
  }

  onDelete(code:string){
    console.log(code);
    this.gestionService.deleteProduct(code).subscribe({
      next: (data:any) => { console.log(data); this.refreshTable(); },
      error: (err:any) => { console.log(err); }
    })
  }

  refreshTable():void{
    this.subProducts = this.gestionService.getProducts().subscribe(
      {
        next: (products:Product[]) => {
          this.dataSource.data = products;
          // console.log(products);
          this.dataSource.paginator = this.paginator;
        },
        error: (err:any) => { console.log(err); }
      }
    )
  }

}