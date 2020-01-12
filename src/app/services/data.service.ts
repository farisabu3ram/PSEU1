import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students =[
    {
        id:1,
      name: 'mohammad',
      spic: 'Computer Eng',
      color: 'rgb(187, 150, 150)'

    },
    {
        id:2,
      name: 'faris',
      spic: 'Computer Eng',
      color: 'rgb(23, 212, 111)'

    },
    {
        id:3,
      name: 'mohammad',
      spic: 'Computer Eng',
      color: 'rgb(4, 0, 255)'

    }

  ];
  constructor() { }

  getAll(){
    return this.students;
}
  getSpecificStudent(id: number){
    return this.students.find( item => item.id == id)
  }
}
