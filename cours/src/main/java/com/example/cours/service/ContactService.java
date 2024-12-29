package com.example.cours.service;

import com.example.cours.entity.Contact;
import java.util.List;

public interface ContactService {
    List<Contact> getAllContacts();
    Contact getContactById(Long id);
    Contact createContact(Contact contact);
    Contact updateContact(Long id, Contact contactDetails);
    void deleteContact(Long id);
}
