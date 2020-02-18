import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/shared/interfaces/services/question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/shared/interfaces/interfaces';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit, AfterViewInit {

  constructor(private questionService:QuestionService, private router:Router, private route:ActivatedRoute) { }
   form:FormGroup;
   questionById:Question;
     ngOnInit() {

    this.form=new FormGroup({
      id:new FormControl(),
      title:new FormControl('',Validators.required),
      text:new FormControl('',Validators.required),
      author:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      userId:new FormControl(+sessionStorage.getItem('Id')),
    })

  }
   onSubmit(){
        this.questionService.create(this.form.value).subscribe(res=>{
          if(res){
            this.form.reset();
          }
        })
   }
   ngAfterViewInit(){
    var id=+this.route.snapshot.queryParams['id']
    if(id){
      this.questionService.selectById(id).subscribe((res)=>{
        let object=Object.assign({},res)
        this.form.setValue(object);

      }
      )
    }
   }
  onUpdate(){
    var id=+this.route.snapshot.queryParams['id']
    this.questionService.updateById(id, this.form.value).subscribe(()=>console.log("Все добре")
    )
  }
  onDelete(){
    var id=+this.route.snapshot.queryParams['id']
    this.questionService.deleteById(id).subscribe(()=>console.log("Видалено")
    );

  }
}
