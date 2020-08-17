package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Trainee;
import com.example.demo.Service.ConsultantsService;

@RestController
public class FirstController {
	
	
	@Autowired
	ConsultantsService service;
	
	@PostMapping("/newconsultant")
	public String newconsultant(@RequestBody Trainee T){
		return service.newconsultant(T);
	}
	@GetMapping("/clientconsultants/{client}")
	public List<Trainee> consultantlist1(@PathVariable("client") String client){
		return service.clientTrainees(client);
	}
	
	@GetMapping("/consultantsmarks/{m}")
	public List<Trainee> consultantsmarks(@PathVariable("m") int m){
		return service.consultantsByMarks(m);
	}
	
	@GetMapping("/maxsalary")
	public int maxsalary() {
		return service.maxsalary();
	}
	
	@GetMapping("/maxsalaryclient/{client}")
	public int maxsalaryclient(@PathVariable("client") String client) {
		return service.maxsalaryclient(client);
	}
	
	@GetMapping("/numbertechconsultants/{client}/{tech}")
	public int numbertechconsultants(@PathVariable("client") String client,@PathVariable("tech") String tech) {
		return service.numbertechconsultants(client,tech);
	}
	
	@GetMapping("/listofclients")
	public List<String> listofClients(){
		return service.listofclients();
	} 
	
	
//	@GetMapping("/techconsultants/{tech}")
//	public List<Trainee> consultantlist2(){
//		
//	}

}
