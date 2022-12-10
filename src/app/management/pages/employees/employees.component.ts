import { Subscription } from 'rxjs';
import { Employee } from './../../interfaces/employee';
import { GestionService } from './../../services/gestion.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [ 'name','age', 'occupation','salary','phone', 'address', 'dateAdmission', 'edit', 'delete'];
  employees:Employee[] = [];
  openModalForm:boolean = false;
  subEmployees!:Subscription;

  constructor(private gestionService:GestionService) {}

  ngOnInit(): void {
    this.gestionService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  ngOnDestroy(): void {
    this.subEmployees?.unsubscribe();
  }



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