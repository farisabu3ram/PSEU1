import { Component } from '@angular/core';
import { DataService1 } from 'src/app/servicesMaterials/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponents  {

  materials;
  constructor(materialaServices : DataService1){
    this.materials=materialaServices.getAll();
  }

}
