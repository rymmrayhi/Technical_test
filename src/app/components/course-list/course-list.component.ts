import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.getCourses();
    });
  }

  // Redirection vers le formulaire pour ajouter un cours
  navigateToAddCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  // Redirection vers le formulaire pour modifier un cours
  navigateToEditCourse(id: number): void {
    this.router.navigate([`/courses/edit/${id}`]);
  }
}
