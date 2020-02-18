import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  sendData(formvalue):Observable<User>{
    console.log(formvalue);

   return  this.http.post<User>('/api/user', formvalue)
  }
}
