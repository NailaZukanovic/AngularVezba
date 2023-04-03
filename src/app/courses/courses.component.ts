import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent{

  title: string = "";
  courses: any[];
  kurs:string = "";
  constructor(private coursesService : CoursesService) {
    this.courses = coursesService.getAll(); 
    
  }
  
  dodajKurs()
  {
    console.log(this.kurs);
    this.coursesService.pushKurs(this.kurs);
  }
  // getCourses() : string {
  //   return this.courses.map(o => o.title);
  // }

  onChangeCourse(id: any){
    console.log('Stigao je id iz ugnjezdene komponente' + id);
  }

  addCourses()
  {
    this.courses.push({
      id: 4,
      title: this.title,
      isFavourite: false,
      price: 29.99
    })
  }
}