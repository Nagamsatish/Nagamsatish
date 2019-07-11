import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
public myParentData=[
  {
    empName:"satish",
    empId:331,
    empSalary:50000,
    empCity:"rajahmundry",
    empPinCode:533102
  },
  {
    empName:"shankar",
    empId:332,
    empSalary:50000,
    empCity:"ongole",
    empPinCode:533103
  },
  {
    empName:"imran",
    empId:333,
    empSalary:50000,
    empCity:"medak",
    empPinCode:533104
  },
  {
    empName:"sai",
    empId:334,
    empSalary:50000,
    empCity:"mumbai",
    empPinCode:533102
  },
  {
    empName:"naresh",
    empId:335,
    empSalary:50000,
    empCity:"culcutta",
    empPinCode:533107
  },
  {
    empName:"naveena",
    empId:336,
    empSalary:50000,
    empCity:"kurnool",
    empPinCode:533109
  },
  {
    empName:"chiru",
    empId:337,
    empSalary:50000,
    empCity:"srikakulam",
    empPinCode:533110
  }
];
  constructor() { }

  ngOnInit() {
  }

}
