import { HtmlAstPath } from '@angular/compiler';
import { assertPlatform, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course.model';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent  {

constructor(public courseService: CourseService){}

  saveCourse(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    const course: Course = {
      _id:"0",
      courseName: form.value.courseName,
      courseDescription: form.value.courseDescription,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      courseFee: form.value.courseFee
    };

    this.courseService.AddCourse(course);
    form.resetForm();
    

  }

}
