import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  employeeForm!:FormGroup;


  constructor(private fs:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fs.group({
      name:       ['', [Validators.required, Validators.minLength(4)]],
      lastname:   ['', [Validators.required, Validators.minLength(7)]],
      age:        ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      email:      ['', [Validators.required, Validators.email]],
      occupation: ['', [Validators.required, Validators.minLength(5)] ],
      salary:     ['', [Validators.required, Validators.min(400)]],
      phone:      ['', [Validators.minLength(10)]],
      address:    ['', [Validators.minLength(10)]],
    });
  }

  closeModalForm(){
    this.closeModal.emit(false);
  }

  addEmployeSubmit(form:FormGroup){
    console.log(form.value);
    console.log(form.valid);
  }

}
