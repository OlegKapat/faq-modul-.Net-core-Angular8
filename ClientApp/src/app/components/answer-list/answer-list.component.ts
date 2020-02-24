import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Answer } from 'src/app/shared/interfaces/interfaces';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AnswerListComponent implements OnInit {
   answer:Answer[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{this.answer=data.answer})
  }
}
