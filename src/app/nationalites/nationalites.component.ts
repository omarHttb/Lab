import { Component } from '@angular/core';
import { Nationalities } from '../model/Nationalites';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nationalites',
  templateUrl: './nationalites.component.html',
  styleUrls: ['./nationalites.component.css']
})
export class NationalitesComponent {

  constructor(private formBuilder:FormBuilder,
    private router:Router){}

  
}
