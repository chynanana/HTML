package com.example.demo.Repositores;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entities.Student;


@Repository
public interface StudentRepository 
extends JpaRepository<Student,Integer>{

}
