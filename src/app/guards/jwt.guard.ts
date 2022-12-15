import { AuthService } from './../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtGuard implements CanLoad {

  constructor(private auth:AuthService){}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(localStorage.getItem("ACCESS_TOKEN") || 'null');
      return this.auth.validToken( localStorage.getItem("ACCESS_TOKEN") || 'null');
  }
}
