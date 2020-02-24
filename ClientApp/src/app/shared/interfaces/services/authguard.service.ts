import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.isLoggedIn()
  }

  constructor(private auth:AuthService) { }
}
