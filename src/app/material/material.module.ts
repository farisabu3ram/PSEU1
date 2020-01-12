import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponents } from './view/view.component';
import { ListComponents } from './list/list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ViewComponents, ListComponents],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class MaterialModule { }
