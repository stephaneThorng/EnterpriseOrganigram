import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, Severity } from '../model/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
	//alerts: Alert[];
	private subject = new Subject<Alert>();
  	constructor() { }


  	getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

  	close(alert: Alert) {
    	//this.alerts.splice(this.alerts.indexOf(alert), 1);
    	this.subject.next();
  	}

  	info(message: string) {
  		//this.alerts.push(new Alert(Severity.INFO, message));
  		this.subject.next(<Alert>{severity: Severity.INFO, message: message});
  	}

  	warn(message: string) {
  		//this.alerts.push(new Alert(Severity.WARNING, message));
  		this.subject.next(<Alert>{severity: Severity.WARNING, message: message});
  	}

  	error(message: string) {
  		//this.alerts.push(new Alert(Severity.DANGER, message));
  		this.subject.next(<Alert>{severity: Severity.DANGER, message: message});
  	}

}
