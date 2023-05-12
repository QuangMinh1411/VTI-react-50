package com.vti.studentsystem.service;

import com.vti.studentsystem.model.Student;
import com.vti.studentsystem.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    private final StudentRepository repo;
    @Override
    public List<Student> getAll() {
        return repo.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
        var saved = repo.save(student);
        return saved;
    }

    @Override
    public Student getStudentById(Integer id) {
        Optional<Student> op = repo.findById(id);
        if(op.isPresent())
            return op.get();
        return null;
    }

    @Override
    public void deleteStudent(Integer id) {
        if(getStudentById(id)!=null){
            repo.deleteById(id);
        }
    }
}
