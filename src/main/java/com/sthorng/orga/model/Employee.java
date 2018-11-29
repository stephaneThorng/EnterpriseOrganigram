package com.sthorng.orga.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name= "employee")
public class Employee {

	@Id
    @GeneratedValue
    @Column(name="emp_id")
    private Long id;
	
	@Column(name="emp_lastname")
	private String lastname;
	
	@Column(name="emp_firstname")
	private String firstname;
}
