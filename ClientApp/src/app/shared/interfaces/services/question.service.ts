
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Question } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  create(form:Question):Observable<Question>{
    return this.http.post<Question>('/api/question',form)
  }
  get():Observable<Question[]>{
    return this.http.get<Question[]>('/api/question')
  }
  selectById(id):Observable<Question>{
    return this.http.get<Question>(`api/question/${id}`)
  }
  updateById(id,question:Question):Observable<Question>{
    return this.http.put<Question>(`/api/question/${id}`,question)
  }
  deleteById(id):Observable<Question>{
    return this.http.delete<Question>(`/api/question/${id}`)
  }
}
