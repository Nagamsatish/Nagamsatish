import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LogComponent } from '../log/log.component';
import { RegisterComponent } from '../register/register.component';
import { ContactComponent } from '../contact/contact.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProductsComponent } from '../products/products.component';
import { ReactiveformsComponent } from '../reactiveforms/reactiveforms.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { Child1Component } from '../child1/child1.component';
import { Parent1Component } from '../parent1/parent1.component';
const routes:Routes=[
  {
    path :"",
    component :HomeComponent
  },
  {
    path :"home",
    component :HomeComponent,
    children :[
      {
        path :"products",
        component :ProductsComponent
      }
    ]
  },
  {
    path :"about",
    component :AboutComponent
  },
  {
    path :"log",
    component :LogComponent
  },
  {
    path :"register",
    component :RegisterComponent
  },
  {
    path :"contact",
    component :ContactComponent
  },
  {
    path :"reactiveforms",
    component :ReactiveformsComponent
  },
  {
    path :"parent",
    component :ParentComponent
  },
  {
    path :"child",
    component :ChildComponent
  },
  {
    path :"parent1",
    component :Parent1Component
  },
  {
    path :"child1",
    component :Child1Component
  },
  {
    path :"**",
    component :PagenotfoundComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class RoutingModule { }
