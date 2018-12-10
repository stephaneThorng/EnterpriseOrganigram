import { Component, OnInit } from '@angular/core';
import { Alert, Severity } from '../model/alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  alerts: Alert[] = new Array();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
 
            // add alert to array
            this.alerts.push(alert);
        });
    }
 
   removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
   }

}