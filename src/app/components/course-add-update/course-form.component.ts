import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  course: Course = {
    title: '',
    image: '',
    price: 0,
  };

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourses().subscribe((data: Course[]) => {
        const course = data.find(c => c.id === +id);
        if (course) {
          this.course = course;
        }
      });
    }
  }

  saveCourse(): void {
    if (this.course.id) {
      this.courseService.updateCourse(this.course.id, this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    } else {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }
}
