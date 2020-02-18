import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/interfaces/services/auth.service';
import { Router } from '@angular/router';
import { User, Auth } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string;
  form:FormGroup;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
    onSubmit(){
      var data=<Auth>{
         name:this.form.value.username,
         password:this.form.value.password
      }
      this.auth.login(data).subscribe(res=>{
        alert("Вхід вдалий"+"token"+this.auth.getAuth()!.token);
        this.router.navigate(['home'])
      }),error=>{
        console.log(error)
        this.form.setErrors({"auth":"Невірний логін чи пароль"})

      }
    }
    onBack(){
      this.router.navigate(['home']);
    }
    getFormControl(name:string){
      return this.form.get(name);
    }
    isValid(name:string){
      var e=this.getFormControl(name)
      return e && e.valid;
    }
    isChanged(name:string){
      var e=this.getFormControl(name);
      return e && (e.dirty || e.touched);
    }
    hasError(name:string){
      var e=this.getFormControl(name)
      return e && (e.dirty || e.touched) && !e.valid;
    }
}
