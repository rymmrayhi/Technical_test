import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService, Contact } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.getContacts();
    });
  }

  // Redirection vers le formulaire pour ajouter un contact
  navigateToAddContact(): void {
    this.router.navigate(['/contacts/new']);
  }

  // Redirection vers le formulaire pour modifier un contact
  navigateToEditContact(id: number): void {
    this.router.navigate([`/contacts/edit/${id}`]);
  }
}
