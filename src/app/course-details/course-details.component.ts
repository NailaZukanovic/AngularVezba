import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {

  course: any = {}
  @Input() courseId:number = 0;

  @Output() change = new EventEmitter;

  increment(){
    this.courseId++;
    this.change.emit(this.courseId);
  }

  constructor(private coursesService: CoursesService)
  {
    this.course = coursesService.getById(this.courseId);
  }
}
