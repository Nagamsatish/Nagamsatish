import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor( private fb:FormBuilder) { }
  public selector=[
    {
    "countryId" : 101,
    "countryName" : "India"
  },
  {
    "countryId" : 102,
    "countryName" : "australia"
  },
  {
    "countryId" : 103,
    "countryName" : "srilanka"
  },
  {
    "countryId" : 104,
    "countryName" : "southafrica"
  },
  {
    "countryId" : 105,
    "countryName" : "wi"
  }
]
  public registerForm;

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName : new FormControl('',[Validators.required,Validators.minLength(5)]),
      email : new FormControl(),
      password : new FormControl(),
      mobile : new FormControl(),
      products : new FormControl(),
      address : new FormControl()
    })

    // this.registerForm = this.fb.group({
    //     userName : ['',[Validators.required,Validators.minLength(5)]],
    //     email : [],
    //     password : [],
    //     mobile : [],
    //     products : [],
    //     address : []
    //   })
  }

  regMethod(){
    console.log(this.registerForm)
    console.log(this.registerForm.value)
  }

}
