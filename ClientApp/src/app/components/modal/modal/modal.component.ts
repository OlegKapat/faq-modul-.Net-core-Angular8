import { Component, OnInit, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //@ViewChild('modal',{static:true}) modal: ElementRef;
  @Output() close=new EventEmitter<any>();
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
