package com.example.demo.Controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Student;
import com.example.demo.Repositores.StudentRepository;



@RestController
@CrossOrigin
public class MyController {


	StudentRepository repo;

	public MyController(StudentRepository r) {
		repo=r;
	}
	
	
	@GetMapping("/deleterecord/{regno}")
	public String deleterecord(@PathVariable("regno") int r) {
		repo.deleteById(r);
		return " record delete";
	}

	@PostMapping("/InsertRecord")
	public String InsertRecord(@RequestBody Student ref) {
		
		repo.save(ref);
		return "Record Saved";
	}

	@GetMapping("/allrecords")
	public List<Student> showallrecord() {
		
		List<Student> records= repo.findAll();
		
		return records;
	}
	
	@GetMapping("/saveRec/{r}/{n}/{a}")
	public String saveRecord(@PathVariable("r") int regno,
			@PathVariable("n") String name,
			@PathVariable("a") String address) {
		Student s=new Student();
		s.setRegno(regno);
		s.setName(name);
		s.setAddress(address);
		repo.save(s);
		
		return "abc";
	}
	
	@GetMapping("/save")
	public String saveRecord() {
		Student s=new Student();
		s.setRegno(19);
		s.setName("shafeeq");
		s.setAddress("manchester");
		repo.save(s);
		
		return "Record Saved";
	}
	
	@GetMapping("/showrecord/{r}")
	public Student specficrecord(@PathVariable("r") int regno) {
	
		Optional<Student> opt=repo.findById(regno);
		
		if (opt.isPresent()) {
			Student  rec=opt.get();
			return rec;
		}

		return null;

	}
	
	@GetMapping("/showall")
	public List<Student> showall() {	
		//List<Student> students= 
		return repo.findAll();	
	}
	
	
}
