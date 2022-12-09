import { GestionService } from './../../services/gestion.service';
import {Component} from '@angular/core';

const ELEMENT_DATA:any = [
  {name:'John', lastname:'Doe', age:'29', email:'jhondoe@gmail.com', occupation:'Repositor', phone:'(809) 555-5555', address:'Calle 1, #1, Santo Domingo, República Dominicana', salary:'10000'},
  {name:'Jane', lastname:'Mc', age:'28', email:'janedae@gmail.com', occupation:'Cajera', phone:'(809) 955-5525', address:'Calle 2, #2, Santo Domingo, República Dominicana', salary:'8000'},
  {name:'John', lastname:'Haz', age:'36', email:'jhondoe@gmail.com', occupation:'Repositor', phone:'(809) 555-5555', address:'Calle 1, #1, Santo Domingo, República Dominicana', salary:'10000'},
  {name:'Jane', lastname:'Cash', age:'24', email:'janedae@gmail.com', occupation:'Cajera', phone:'(809) 955-5525', address:'Calle 2, #2, Santo Domingo, República Dominicana', salary:'18000'},
]

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  displayedColumns: string[] = [ 'name','age', 'occupation','salary','phone', 'address', 'dateAdmission', 'edit', 'delete'];
  employees = ELEMENT_DATA; //TODO: Tipar, crear interface.
  openModalForm:boolean = false;


  constructor(private gestionService:GestionService) {}

  onEdit(code:string){
    console.log(code);
    //TODO: Sweet alert to edit.
  }

  onDelete(email:string){
    this.gestionService.deleteEmployee(email);
    //TODO: Sweet alert, confirm delete.
  }

  addEmployee(){
    this.openModalForm = true;
  }
  

  // closeModalForm(event:boolean){
  //   this.openModalForm = event;
  // }

}