import { Component, OnInit } from '@angular/core';
import {IStudent} from '../../model/IStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'cường',
    age: 18,
    phone: 1782212121,
    mark: 7,
    image: 'https://hinhnen123.com/wp-content/uploads/2021/07/Tong-hop-999-hinh-anh-Avatar-anime-cute-dep-va-an-tuong-nhat.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

  changeAge(target: any) {
    // @ts-ignore
    // this.student.age(target.value)
  }
}
