import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../model/employee.model';
import { AlertService } from '../../alert/alert.service';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

	employee: Employee = new Employee();

  	constructor(private router: Router, private employeeService: EmployeeService, private  alertService: AlertService) { }

  	ngOnInit() { }

  	createEmployee(): void {
    	this.employeeService.createEmployee(this.employee)
        .subscribe( 
        	data => { this.alertService.info('Employee created successfully.');},
        	error => { this.alertService.error('Error on processed.');}
        );

    this.router.navigate(['employees'])
  	};

}
