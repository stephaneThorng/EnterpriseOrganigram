import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../model/employee.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

	private apiUrl = 'http://localhost:8080/api/employee';

  	constructor(private http: HttpClient) { }

  	public findAll() {
		return this.http.get<Employee[]>(this.apiUrl);
	}

	public findById(id: number) {
		return this.http.get<Employee[]>(this.apiUrl + "/" + id);
	}

	public deleteEmployee(employee: Employee) {
		return this.http.delete(this.apiUrl + "/"+ employee.id);
	}

	public createEmployee(employee: Employee) {
	    return this.http.post<Employee>(this.apiUrl, employee);
	}

}
