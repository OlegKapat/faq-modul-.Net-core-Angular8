import { AnswerService } from './answer.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Answer } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerresolverService implements Resolve<Answer> {
  constructor(private answerService:AnswerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Answer | Observable<Answer> | Promise<Answer> {
    return this.answerService.getById(+route.params['id'])
  }

}
