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
    this.id=+this.route.snapshot.queryParams['id']
    this.questionService.selectById(this.id).subscribe(res=>{this.questionTitle=res.title
      console.log(this.questionTitle);

    });
  }
  onSubmit(){
    let data={
      text:this.form.get('text').value,
      author:this.form.get('author').value,
      id:this.id
    }
    this.answerService.sendData(data).subscribe(res=>console.log(res)
    )
  }

}
