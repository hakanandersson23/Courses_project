import { Injectable } from "@angular/core";
import { Course } from "./course.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

//makes angular aware of the service file, also makes sure we can only inject one instance of the service
@Injectable({providedIn:'root'})
export class CourseService{
private courses: Course[] =[];
private courseSubject = new Subject<Course[]>();

//observable
constructor (private http: HttpClient){}

//sends a get request to the api
getCourses(){
  this.http.get<{message: string, courses: Course[]}>('http://localhost:3000/api/courses')
  .subscribe((data) => {
    this.courses = data.courses;
    this.courseSubject.next([...this.courses]);
  });
}

//Returns a object of the courses array that can be listened to as a observable.
getCourseSubject(){
  return this.courseSubject.asObservable();
}

// method for adding a new course.
AddCourse(cour:Course){
const course:Course = cour;
//sending the post to the serverside.
this.http.post<{message:string}>('http://localhost:3000/api/courses', course)
.subscribe((data)=>{
  this.courses.push(course);
  this.courseSubject.next([...this.courses]);
});
}

}
