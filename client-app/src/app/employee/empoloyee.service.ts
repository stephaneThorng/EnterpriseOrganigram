import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmpoloyeeService {

	const apiUrl = 'http://localhost:8080/api/employee';
	const httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};

  	constructor(private http: HttpClient) { }

  	findAll(): Promise<Array<Employee>> {
  		return this.http.get(this.apiUrl)
  			.toPromise()
		 .then(response => response.json() as Employee[])
		 .catch(this.handleError);
  	}


	private handleError(error: any): Promise<Array<any>> {
		 console.error('An error occurred', error);
		 return Promise.reject(error.message || error);
		 }

}
