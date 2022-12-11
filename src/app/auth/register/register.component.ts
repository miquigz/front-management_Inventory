import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(private fs:FormBuilder, private authService:AuthService, private router:Router){ }

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
      this.authService.register(form.value)
      .subscribe({
        next: (res)=>{console.log(res); this.router.navigate(['/']);},
        error: (err)=>{console.log("ERROR EN RegisterSubmit", err);}
      })
    }
  }
  

}
