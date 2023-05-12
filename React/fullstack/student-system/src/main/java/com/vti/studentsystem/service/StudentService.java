package com.vti.studentsystem.service;

import com.vti.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student saveStudent(Student student);

    Student getStudentById(Integer id);

    void deleteStudent(Integer id);
}
