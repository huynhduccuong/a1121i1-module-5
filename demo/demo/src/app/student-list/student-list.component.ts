import { Component, OnInit } from '@angular/core';
import {IStudent} from '../../model/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  {
  students: IStudent[] = [
    {
      id: 1,
      name: 'cường',
      age: 18,
      phone: 1782212121,
      mark: 10,
      image: 'https://hinhnen123.com/wp-content/uploads/2021/07/Tong-hop-999-hinh-anh-Avatar-anime-cute-dep-va-an-tuong-nhat.jpg'
    },
    {
      id: 1,
      name: 'cường',
      age: 18,
      phone: 1782212121,
      mark: 10,
      image: 'https://hinhnen123.com/wp-content/uploads/2021/07/Tong-hop-999-hinh-anh-Avatar-anime-cute-dep-va-an-tuong-nhat.jpg'
    },
    {
      id: 1,
      name: 'cường',
      age: 18,
      phone: 1782212121,
      mark: 10,
      image: 'https://hinhnen123.com/wp-content/uploads/2021/07/Tong-hop-999-hinh-anh-Avatar-anime-cute-dep-va-an-tuong-nhat.jpg'
    },
  ];
  constructor() { }
}
