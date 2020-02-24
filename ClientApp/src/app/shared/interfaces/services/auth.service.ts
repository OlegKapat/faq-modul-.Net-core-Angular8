
import { Injectable, Inject, PLATFORM_ID} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
import { isPlatformBrowser} from '@angular/common';
import {TokenResponse} from '../interfaces';
import {User,Auth} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   authKey:string="auth";
   clientId:string="dotnetangular";

  constructor(private http:HttpClient, @Inject(PLATFORM_ID) private platformId:any) { }

  login(data:any):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth');
    headers.append('Authorization', `Bearer - ${authToken}`);
    return this.http.post<TokenResponse>('/api/auth/token',data,{headers:headers}).pipe(map((res)=>{let token=res.token && res;
     if(token){
        this.setAuth(res);
        sessionStorage.setItem("Id",res.userId)
        return true;
      }
      catchError(err=>{return throwError(err)});
    })

    )
  }
  logout():boolean{
    this.setAuth(null);
    return true;
  }
  setAuth(auth:TokenResponse | null):boolean{
    if(isPlatformBrowser(this.platformId)){
      if(auth){
        localStorage.setItem(this.authKey, JSON.stringify(auth));
      }
      else{
        localStorage.removeItem(this.authKey);
     }
    }
    return true;
  }
  getAuth():TokenResponse | null{
    if(isPlatformBrowser(this.platformId)){
      var i=localStorage.getItem(this.authKey);
      if(i){
        return JSON.parse(i);
      }
    }
    return null;
  }
  isLoggedIn():boolean{
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem(this.authKey)!=null;
    }
    return false;
  }
}

