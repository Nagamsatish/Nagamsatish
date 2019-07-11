import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() parentData
// data="satish"

public data=[
      {
        name:"satish",
        id:"331",
        no:12345678,
        havingCar:true
      },
      {
        name:"shankar",
        id:"332",
        no:123456789,
        havingCar:true
      },
      {
        name:"imran",
        id:"333",
        no:1234567810,
        havingCar:false
      },
    ]
    // save(){
    //   console.log(this.data)
    // }
@Output() myButton=new EventEmitter();
save(){
  this.myButton.emit(this.data)
}
  constructor() { }

  ngOnInit() {
  }

}
