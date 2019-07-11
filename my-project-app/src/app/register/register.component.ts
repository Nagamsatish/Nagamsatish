import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  register="register page"
  users = [
    {
      "empId" : 1,
      "empName": "Sathish",
      "salary":50000,
      "city":"rajahmundry",
    },
    {
      "empId" : 2,
      "empName": "Shankar",
      "salary":60000,
      "city":"ongole",
    },
    {
      "empId" : 3,
      "empName": "naresh",
      "salary":60000,
      "city":"hydb",
    },
    {
      "empId" : 4,
      "empName": "imran",
      "salary":60000,
      "city":"vizag",
    },
    {
      "empId" : 5,
      "empName": "Sai",
      "salary":70000,
      "city":"chennai",
    },
    {
      "empId" : 6,
      "empName": "chiru",
      "salary":90000,
      "city":"bengalur",
    },
    {
      "empId" : 7,
      "empName": "uday",
      "salary":80000,
      "city":"kochi",
    },
    {
      "empId" : 8,
      "empName": "vinay",
      "salary":70000,
      "city":"kerala",
    }
  ]

}
