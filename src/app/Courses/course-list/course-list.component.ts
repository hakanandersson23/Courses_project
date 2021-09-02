import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../course.model';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})


export class CourseListComponent implements OnInit, OnDestroy {

  //using dependency injection to pass on the courses service into this component.
  constructor(public courseService: CourseService) { }

  courses: Course[] = [];
  courseSub?: Subscription;

  ngOnInit(): void {
   this.courseService.getCourses();
    //Gets the data thats emitted from the service.
  this.courseSub =  this.courseService.getCourseSubject()
    .subscribe((courses: Course[]) => {
      this.courses = courses;
    });

  }

  ngOnDestroy(){
    this.courseSub?.unsubscribe();
  }

}
