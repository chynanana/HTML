package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Trainee;
import com.example.demo.Repositories.TraineeRepo;

@Service
public class ConsultantsService {

	@Autowired
	TraineeRepo repo;
	
	public List<Trainee> clientTrainees(String c){
		return repo.findByClient(c);
	}
	
	public String newconsultant(Trainee t) {
		repo.save(t);
		return " record saved";
	}
	
	public List<Trainee> consultantsByMarks(int m) {
		return repo.findByMarksGreaterThanEqual(m);
	}
	
	public int maxsalary() {
		return repo.maxsalary();
	}
	
	public int maxsalaryclient(String client) {
		return repo.maxsalaryclient(client);
	}
	
	public int numbertechconsultants(String client, String tech) {
		return repo.numbertechconsultants(client, tech);
	}
	
	public List<String> listofclients(){
		return repo.listofclients();
	}
}
