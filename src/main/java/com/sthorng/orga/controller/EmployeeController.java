package com.sthorng.orga.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sthorng.orga.model.Employee;
import com.sthorng.orga.service.IEmployeeService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({EmployeeController.URL_PATH})
@Slf4j
public class EmployeeController {
	
	static final String URL_PATH = "/api/employee";
	@Autowired
	private IEmployeeService employeeService;

	@RequestMapping(value="/{id}", method= RequestMethod.GET)
	public Employee getEmployee(@PathVariable Long id) {
		log.info(URL_PATH+ "/"+ id);
		return employeeService.findBy(id).orElse(null);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Employee> getEmployees() {
		log.info("GET ALL : " + URL_PATH);
		return employeeService.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Employee saveEmployee(@RequestBody Employee employee) {
		log.info("SAVE : " + URL_PATH);
		return employeeService.save(employee);
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public boolean deleteEmployee(@RequestBody Employee employee) {
		log.info("DELETE : " + URL_PATH);
		employeeService.delete(employee);
		return true;
	}
}
