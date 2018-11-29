package com.sthorng.orga.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sthorng.orga.dao.IEmployeeDao;
import com.sthorng.orga.model.Employee;
import com.sthorng.orga.service.IEmployeeService;

@Service
public class EmployeeService implements IEmployeeService{

	@Autowired
	private IEmployeeDao dao;
	
	@Override
	public Optional<Employee> findBy(Long id) {
		
		return dao.findBy(id);
	}

	@Override
	public List<Employee> findAll() {
		return dao.findAll();
	}

	@Override
	public Employee save(Employee employee) {
		return dao.save(employee);
	}

	@Override
	public void delete(Employee employee) {
		dao.delete(employee);
	}
	
}
