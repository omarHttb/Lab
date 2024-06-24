import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';
import { Signin } from '../model/Signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
    UserForm !:FormGroup;
    constructor(private formBuilder:FormBuilder,
                private accountService:AccountService,
                private router:Router){}

    ngOnInit(): void {
      this.UserForm= this.formBuilder.group  ({
        "txtUsername":['',Validators.required],
        "txtPassword":['',Validators.required]
       
      })
    }
    Login(){
      if(this.UserForm.valid){
        var user =new Signin()
        user.Username=this.UserForm.value["txtUsername"]
        user.password=this.UserForm.value["txtPassword"]
  
        this.accountService.Login(user).subscribe({
          next:data=>{
           localStorage.setItem("securityInfo",data.token)
           console.log("success");
           this.router.navigate(['/home/CreateAccount'])
          },
          error:err=>{
            console.log("error")
          }
        })
      }
    }
  

}
