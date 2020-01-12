import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService1 {

  constructor() { }
  materials =[
    {
        id:1,
      name: 'mohammad',
      spic: 'Computer Eng',

    },
    {
        id:2,
      name: 'faris',
      spic: 'Computer Eng',

    },
    {
        id:3,
      name: 'mohammad',
      spic: 'Computer Eng',

    }

  ];
  getAll(){
    return this.materials;
  }
  getSpecificMaterials(id:number){
    return this.materials.find(item => item.id == id);
  }
}
