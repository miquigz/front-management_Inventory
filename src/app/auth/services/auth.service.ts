import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { Observable, BehaviorSubject } from 'rxjs';

import { UserI } from '../interfaces/user';
import { JwtResponseI } from '../interfaces/jwt-response';
import { environment } from './../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = environment.SERVER + '/api/v1/auth';
  authSubject = new BehaviorSubject(false);
  private token!: string;

  constructor(private httpClient:HttpClient) { }

  register( user:UserI):Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,user)
    .pipe(
      tap((res:JwtResponseI)=>{
          if(res){//save token
            this.saveToken( res.dataUser.accessToken ,  res.dataUser.expiresIn );
      }}));
  }
  
  login( user:UserI):Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,user)
    .pipe( 
      tap((res:JwtResponseI)=>{
          if(res){//save token  
            this.saveToken( res.dataUser.accessToken , res.dataUser.expiresIn );
      }}));
  }

  validToken( token:string ):Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.AUTH_SERVER}/validToken/${token}`);
    //TODO: PASAR POR PARAM, no por headers, en el backend.
  }


  logout():void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token:string , expiresIn:string):void{
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRES_IN",expiresIn);
    this.token = token;
  }
  
  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN") || '';
    }
    return this.token;
  }
}
