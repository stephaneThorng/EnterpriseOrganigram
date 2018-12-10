import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	employees: Employee[]; 

	constructor(private router: Router, private employeeService: EmployeeService) { }

	ngOnInit() {
		this.employeeService.findAll().subscribe( data => { this.employees = data; });
	}

}
