import { QuestionService } from 'src/app/shared/interfaces/services/question.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
   question:Question[];
   selectQuestion:Question;
  constructor(private questionService:QuestionService, private router:Router) { }

  ngOnInit() {
     this.questionService.get().subscribe((res)=>{this.question=res}
     )
  }
  onSelect(question:Question){
    this.router.navigate(['/create'],{
      queryParams:{
        id:question.id
      }
    })
  }

}
