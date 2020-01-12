import { Component  } from '@angular/core';
import { DataService1 } from 'src/app/servicesMaterials/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponents   {
 material={};
 constructor(material:DataService1,private routeParmCtrl:ActivatedRoute){
   const id=+routeParmCtrl.snapshot.paramMap.get('id');
   this.material=material.getSpecificMaterials(id);
 }
}
