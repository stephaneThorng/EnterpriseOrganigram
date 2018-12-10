package com.sthorng.orga.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sthorng.orga.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
