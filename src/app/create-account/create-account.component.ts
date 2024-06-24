import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { Signup } from '../model/Signup';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  UserForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private accountService:AccountService){}
  
  ngOnInit(): void {
        this.UserForm  =  this.formBuilder.group({
        "txtName":['',Validators.required],
        "txtEmail":['',Validators.required],
        "rbGender":['',Validators.required],
        "txtPassword":['',Validators.required],
        "txtConfirmPassword":['',Validators.required],
        "txtTimeDate":['',Validators.required]
      })
  }

  createAccount(){
    
    if(this.UserForm.valid==true){
      var newUser=new Signup();
      newUser.Username=this.UserForm.controls['txtName'].value
      newUser.email=this.UserForm.controls['txtEmail'].value
      newUser.gender=this.UserForm.controls['rbGender'].value
      newUser.password=this.UserForm.controls['txtPassword'].value
      newUser.confirmPassword=this.UserForm.controls['txtConfirmPassword'].value
      newUser.DateOfBirth = this.UserForm.controls['txtTimeDate'].value

      this.accountService.createAccount(newUser).subscribe({
        next:data=>{
          console.log("success")
        },
        error:err=>{
          console.log("error")
        }
      })
    }
  }

}
