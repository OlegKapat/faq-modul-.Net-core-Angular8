import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private injectot:Injector) { }
  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    var auth=this.injectot.get(AuthService);
    var token=(auth.isLoggedIn()) ? auth.getAuth()!.token : null;
    if(token){
      req=req.clone({
        setHeaders:{Authorization:`Bearer ${token}`}
      })
    }
    return next.handle(req);
  }




}
