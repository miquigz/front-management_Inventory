import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Employee } from './../interfaces/employee';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class GestionService {


  private _server:String = environment.SERVER + '/api/v1';
  private headers!:HttpHeaders;
  
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      "x-access-token": localStorage.getItem('ACCESS_TOKEN') || ''
    });
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this._server}/product/products`, {headers: this.headers});
  }

  getOnlyProduct(code:string):Observable<Product>{
    return this.http.get<Product>(`${this._server}/product/specific/${code}`, {headers: this.headers});
  }


  createProduct(prod:Product){
    return this.http.post(`${this._server}/product/create`, prod, {headers: this.headers});
  }
  
  
// ?_method=PUT

  updateProduct(prod:Product, ){
    return this.http.put(`${this._server}/product/edit`, prod, {headers: this.headers});
    // .subscribe(
    //   { next: data => { console.log(data); return data;}, error: error => { console.log(error); return error; } })
  }

  deleteProduct(prodCode:string, ){
    return this.http.delete(`${this._server}/product/delete/${prodCode}`, {headers: this.headers});
  }

  //EMPLOYEES
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this._server}/employee/employees`,  {headers: this.headers})
  }

  getOnlyEmployee(email:string, ):Observable<Employee>{
    return this.http.get<Employee>(`${this._server}/employee/specific/${email}`, {headers: this.headers});
  }

  getCategoriesEmployees():Observable<string[]>{
    return this.http.get<string[]>(`${this._server}/employee/categories`, {headers: this.headers});
  }

  createEmployee(employee:Employee ,){
    return this.http.post(`${this._server}/employee/create`, employee, {headers: this.headers});
  }

  deleteEmployee(email:string, ){
    return this.http.delete(`${this._server}/employee/delete/${email}`, {headers: this.headers});
  }

  updateEmployee(employee:Employee, ){
    return this.http.put(`${this._server}/employee/edit/${employee.email}`, employee, {headers: this.headers});
  }

}
