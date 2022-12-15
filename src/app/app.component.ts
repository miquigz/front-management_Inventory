import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Inventory Managment';

  validToken$:Observable<boolean> = new Observable<boolean>();

  constructor(private auth:AuthService) {}

  ngOnInit(): void {
    this.validToken$ = this.auth.validToken( localStorage.getItem("ACCESS_TOKEN") || 'null');
  }


}