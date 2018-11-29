package com.sthorng.orga.service;

import java.util.List;
import java.util.Optional;

import com.sthorng.orga.model.Employee;

public interface IEmployeeService {

	Optional<Employee> findBy(Long id);
	
	List<Employee> findAll();

	Employee save(Employee employee);
	
	void delete(Employee employee);
}
