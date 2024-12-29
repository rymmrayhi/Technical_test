package com.example.cours.entity;

import jakarta.persistence.*;

/**
 * Entity representing a Course.
 */
@Entity
@Table(name = "courses") // Nom de la table dans la base de données
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incrémentation de l'ID
    private Long id;

    @Column(nullable = false, length = 100) // Titre obligatoire, longueur maximale de 100 caractères
    private String title;

    @Column(nullable = false) // URL de l'image obligatoire
    private String image;

    @Column(nullable = false) // Prix obligatoire
    private int price;

    // Constructeurs
    public Course() {
        // Constructeur par défaut requis par JPA
    }

    public Course(String title, String image, int price) {
        this.title = title;
        this.image = image;
        this.price = price;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    // Méthode toString pour afficher facilement les données de l'entité
    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", image='" + image + '\'' +
                ", price=" + price +
                '}';
    }
}
