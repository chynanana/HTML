package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entities.Trainee;


@Repository
public interface TraineeRepo extends JpaRepository<Trainee,Integer> {

	public List<Trainee> findByTechnology(String tech);
	public List<Trainee> findByClient(String client);
	public List<Trainee> findByMarksGreaterThanEqual(int M);
	
	@Query(value="Select max(salary) from consultant", nativeQuery=true)
	public int maxsalary();
	
	@Query(value="Select max(salary) from consultant where client=?1", nativeQuery=true)
	public int maxsalaryclient(String c);
	
	@Query(value="Select count(*) from consultant where client=?1 and technology=?2", nativeQuery=true)
	public int numbertechconsultants(String client, String tech);
	
	@Query(value="Select distinct client from consultant", nativeQuery=true)
	public List<String> listofclients();
	

}
