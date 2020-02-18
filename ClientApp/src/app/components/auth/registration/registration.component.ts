import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { RegistrationService } from 'src/app/shared/interfaces/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form:FormGroup;
  constructor(private local:Location, private registrationService:RegistrationService) { }

  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required)
    })
  }
   back(){
    this.local.back();
   }
   onSubmit(){
    this.registrationService.sendData(this.form.value).subscribe(i=>this.form.reset())
   }
}
