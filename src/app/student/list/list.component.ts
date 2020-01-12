import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  
  arrayList ;
  constructor(studentService: DataService){
    this.arrayList=studentService.getAll();
  }
  color='';
  changeColor(e){
    this.color=e;
  }

}
