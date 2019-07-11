import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public myData;
  parentData(events){
this.myData=events
  }
// public userName="satish"
// public studentData=[
//   {
//     name:"satish",
//     id:"331",
//     no:12345678,
//     havingCar:true
//   },
//   {
//     name:"shankar",
//     id:"332",
//     no:123456789,
//     havingCar:true
//   },
//   {
//     name:"imran",
//     id:"333",
//     no:1234567810,
//     havingCar:false
//   },
// ]
  constructor() { }

  ngOnInit() {
  }

}
