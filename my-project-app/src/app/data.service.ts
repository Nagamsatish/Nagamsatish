import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getEmployee()
  {
    return[
      {
        "studentId" : 1,
        "studentName": "Sathish",
        "salary":50000,
        "city":"rajahmundry",
      },
      {
        "studentId" : 2,
        "studentName": "Shankar",
        "salary":60000,
        "city":"ongole",
      },
      {
        "studentId" : 3,
        "studentName": "naresh",
        "salary":60000,
        "city":"hydb",
      },
      {
        "studentId" : 4,
        "studentName": "imran",
        "salary":60000,
        "city":"vizag",
      },
      {
        "studentId" : 5,
        "studentName": "Sai",
        "salary":70000,
        "city":"chennai",
      },
      {
        "studentId" : 6,
        "studentName": "chiru",
        "salary":90000,
        "city":"bengalur",
      },
      {
        "studentId" : 7,
        "studentName": "uday",
        "salary":80000,
        "city":"kochi",
      },
      {
        "studentId" : 8,
        "studentName": "vinay",
        "salary":70000,
        "city":"kerala",
      }
    ]
  }

}
