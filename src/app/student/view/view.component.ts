import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  student = {};
  constructor(studentService: DataService, private routeParmCtrl: ActivatedRoute){
   
    const id = + routeParmCtrl.snapshot.paramMap.get('id');
    this.student = studentService.getSpecificStudent(id);
  }
  
  ngOnInit() {
  }

}
