import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import {MaterialModule} from './material/material.module'
import { DataService } from './services/data.service';
import { DataService1 } from './servicesMaterials/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    MaterialModule,
    AppRoutingModule
    
  ],
  providers: [
    DataService,
    DataService1

  ],
  bootstrap: [AppComponent],
 

})
export class AppModule { }
