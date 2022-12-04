import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(private fs:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fs.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)] ]
    });

    console.log(this.registerForm.controls['email'].errors);
  }

  registerSubmit(form:FormGroup){
    if (form.valid ){
      console.log(form.value);
    }
  }
  

}
