package com.example.cours.repository;

import com.example.cours.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Vous pouvez ajouter des méthodes personnalisées si nécessaire, par exemple :
    // Optional<Contact> findByEmail(String email);
}
