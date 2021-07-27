import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  loginform;

  constructor(private fb:FormBuilder) 
  {
  /*{
    
    this.loginform=new FormGroup(
      {mailid:new FormControl(null,[Validators.required,Validators.email]),
        pwd:new FormControl(null,Validators.required)
      }
    );*/

    this.loginform=this.fb.group({
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]],
      age:['',[this.ageRangeValidator]]
    

    })

   }

  ngOnInit() {
  }

  ageRangeValidator(control:AbstractControl):
  { [key:string]:boolean}|null
  {   

    if(control.value !== undefined && (isNaN(control.value)|| control.value<18|| control.value>45))
    {
        return {'ageRange':true};
    }
    return null;
  }


}
