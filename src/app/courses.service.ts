import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [{id: 1,
    title: 'course1',
    price: 19.99,
    isFavourite: true
  }, {
      id: 1,
      title: 'course2',
      price: 29.09,
      isFavourite: false}, {
        id: 1,
        title:'course3',
      price: 59.99,
    isFavourite: false}];

  getAll()
  {
    return this.courses;
  }

  pushKurs(kurs:any)
  {
    this.courses.push(kurs);
  }

  getById(id: number)
  {
    return this.courses?.find(c => c.id === id) ?? {};
  }
}