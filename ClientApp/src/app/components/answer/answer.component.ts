import { switchMap } from 'rxjs/operators';
import { AnswerService } from './../../shared/interfaces/services/answer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/shared/interfaces/services/question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, AfterViewInit {
  questionTitle:string;
  id:number;
  form:FormGroup;
  constructor(private route:ActivatedRoute, private questionService:QuestionService,private answerService:AnswerService) { }

  ngOnInit() {
      this.form=new FormGroup({
        text:new FormControl('',Validators.required),
        author:new FormControl('',Validators.required)
      })

  }
  ngAfterViewInit(){
    this.route.params.pipe(switchMap(params=>this.questionService.selectById(params['id']))).subscribe(res=>{this.questionTitle=res.title});

  }
  onSubmit(){
    this.route.params.pipe(switchMap(params=>this.answerService.sendData({
      text:this.form.get('text').value,
      author:this.form.get('author').value,
      id:+params['id']
    })

    )).subscribe(()=>console.log("Відповідь успішно додана"))

  }

}
