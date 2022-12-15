import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm!:FormGroup;
  subAuth!:Subscription;

  constructor(private fs:FormBuilder, private authService:AuthService, private router:Router){ }

  ngOnInit(): void {
    this.registerForm = this.fs.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]],
      lastname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    });

    console.log(this.registerForm.controls['email'].errors);
  }

  ngOnDestroy(): void {
    this.subAuth?.unsubscribe();
  }

  registerSubmit(form:FormGroup){
    if (form.valid ){
      this.subAuth = this.authService.register(form.value)
      .subscribe({
        next: (res)=>{console.log(res); this.router.navigate(['/']);},
      })
    }
    form.markAllAsTouched;
  }
  
}
