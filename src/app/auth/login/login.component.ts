import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor( 
    private router:Router,
    private authService:AuthService,
    private fs:FormBuilder){ }

  ngOnInit(): void {
    this.loginForm = this.fs.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)] ]
    });
  }

  loginSubmit(form:FormGroup){
    if (form.valid ){
    console.log("condicion")
      this.authService.login(form.value)
      .subscribe({
        next: (res)=>{console.log(res); this.router.navigate(['/']);},
        error: (err)=>{console.log("ERROR EN LoginSubmit", err);}
      });
    }
  }

}
