import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../model/Departments';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.css']
})
export class NewDepartmentComponent {
currentDate!: Date
DepartmentForm!:FormGroup
constructor(private formBuilder:FormBuilder,
            private ActivatedRoute:ActivatedRoute
){}


    // save(){
    //   var NewDepartment = new Department()
    //   NewDepartment.name = "input code"
    //   NewDepartment.AddDate = 
    
    // }
}
