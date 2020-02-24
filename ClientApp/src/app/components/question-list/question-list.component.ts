
import { QuestionService } from 'src/app/shared/interfaces/services/question.service';
import { Component, OnInit, ComponentFactoryResolver, ViewChild} from '@angular/core';
import { Question } from 'src/app/shared/interfaces/interfaces';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal/modal.component';
import { ModalDirective } from 'src/app/shared/directives/modal.directive';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @ViewChild(ModalDirective,{static:false}) refDir:ModalDirective;
   question:Question[];
   selectQuestion:Question;
   answer: any;


  constructor(private questionService:QuestionService,private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
     this.questionService.get().subscribe((res)=>{this.question=res}
     )

  }
  showModal(id){
    window.setTimeout(()=>{
      const modelFactory=this.resolver.resolveComponentFactory(ModalComponent )
      const but=this.refDir.ref.createComponent(modelFactory)
      but.instance.id=id;
      but.instance.close.subscribe(()=>{
         this.refDir.ref.clear();
      })
    },200)


  }
}
