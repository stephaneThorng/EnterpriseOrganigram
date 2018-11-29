package com.sthorng.orga.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sthorng.orga.dao.IEmployeeDao;
import com.sthorng.orga.dao.repository.EmployeeRepository;
import com.sthorng.orga.model.Employee;

@Repository
public class EmployeeDao implements IEmployeeDao{

	@Autowired
	private EmployeeRepository repository;
	
	@Override
	public Optional<Employee> findBy(Long id) {
		return repository.findById(id);
	}
	
	@Override
	public List<Employee> findAll() {
		return repository.findAll();
	}
	
	@Override
	public Employee save(Employee employee) {
		return repository.save(employee);
	}
	
	@Override
	public void delete(Employee employee) {
		repository.delete(employee);
	}

}
