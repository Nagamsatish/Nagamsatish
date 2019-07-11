import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../shared/my-data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private empData:MyDataService) { }
  employees:any;
  ngOnInit() {
   this.empData.getMyData()
   .subscribe(data => this.employees = data)
  }
  about="about page"

}

function data(name){

}
data('shankar')
