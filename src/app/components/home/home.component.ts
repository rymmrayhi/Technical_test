import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../services/contact.service';
import { Course } from '../../services/course.service';
import { ContactService } from '../../services/contact.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Données pour les cours
  courses: Course[] = [];
  
  // Données pour le formulaire de contact
  contact: Contact = {
    name: '',
    email: '',
    message: ''
  };

  // Données pour la connexion
  loginData = {
    username: '',
    password: ''
  };

  constructor(
    private courseService: CourseService,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  // Charger les cours depuis le backend
  loadCourses(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  // Soumettre le formulaire de contact
  submitContact(): void {
    this.contactService.createContact(this.contact).subscribe(() => {
      alert('Message sent successfully!');
      this.contact = { name: '', email: '', message: '' };
    });
  }

  // Gérer la connexion
  login(): void {
    const { username, password } = this.loginData;

    // Vérification des identifiants (statique pour cet exemple)
    if (username === 'user' && password === '123') {
      alert('Connexion réussie');
      this.router.navigate(['/courses']); // Redirection vers la page liste des cours
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
}
