import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router'
import {RoutingModule} from './routing/routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

import { ContactComponent } from './contact/contact.component';

import { LogComponent } from './log/log.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormspracticeComponent } from './formspractice/formspractice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { NewtaskComponent } from './newtask/newtask.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    ContactComponent,
    LogComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ProductsComponent,
    ReactiveformsComponent,
    FormspracticeComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    NewtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
