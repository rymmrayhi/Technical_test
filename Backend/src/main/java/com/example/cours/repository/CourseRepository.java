package com.example.cours.repository;

import com.example.cours.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // Vous pouvez ajouter des méthodes de requêtes personnalisées si nécessaire
}
