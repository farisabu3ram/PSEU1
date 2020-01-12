import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddNewUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class StudentModule { }
