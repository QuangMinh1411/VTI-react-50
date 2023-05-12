package com.vti.studentsystem.controller;

import com.vti.studentsystem.model.Student;
import com.vti.studentsystem.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService service;
    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudent(@PathVariable Integer id){
        Student exist = service.getStudentById(id);
        if(exist!=null){
            return ResponseEntity.ok(exist);
        }
        return (ResponseEntity<?>) ResponseEntity.noContent();
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Student student){
        Student saved = service.saveStudent(student);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Student student){
        Student exist = service.getStudentById(id);
        if(exist!=null){
            exist.setName(student.getName());
            exist.setAddress(student.getAddress());
            service.saveStudent(exist);
            return ResponseEntity.ok(exist);
        }
        return (ResponseEntity<?>) ResponseEntity.noContent();
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") Integer id){
        Student exist = service.getStudentById(id);
        if(exist!=null){
            service.deleteStudent(exist.getId());
            return ResponseEntity.ok("Delete success");
        }else{
            return (ResponseEntity<?>) ResponseEntity.badRequest();
        }
    }
}
