package com.example.cours.controller;

import com.example.cours.entity.Contact;
import com.example.cours.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:4200") // Pour autoriser les requêtes CORS depuis Angular
public class ContactController {

    @Autowired
    private ContactService contactService;

    // GET: Récupérer tous les contacts
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    // GET: Récupérer un contact par ID
    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable Long id) {
        return contactService.getContactById(id);
    }

    // POST: Créer un nouveau contact
    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }

    // PUT: Mettre à jour un contact existant
    @PutMapping("/{id}")
    public Contact updateContact(@PathVariable Long id, @RequestBody Contact contactDetails) {
        return contactService.updateContact(id, contactDetails);
    }

    // DELETE: Supprimer un contact
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
    }
}
