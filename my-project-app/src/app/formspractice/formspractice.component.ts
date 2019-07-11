import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formspractice',
  templateUrl: './formspractice.component.html',
  styleUrls: ['./formspractice.component.css']
})
export class FormspracticeComponent implements OnInit {

  constructor() { }

public formExample;
  ngOnInit() {
    this.formExample=new FormGroup({
      username :new FormControl(),
      email :new FormControl(),
      Password :new FormControl(),
      Mobile :new FormControl(),
      Gender :new FormControl(),
      Bikes :new FormControl(),
      addresses :new FormControl()
    })
  }
  formMethod()
  {
    console.log(this.formExample)

  }
}
