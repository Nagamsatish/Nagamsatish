import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployeeData } from '../about/empData';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http:HttpClient) { }
  private url:string = 'assets/myJsonData/employeesData.json';
  getMyData():Observable<IEmployeeData>{
    return this.http.get<IEmployeeData>(this.url)
  }
}
