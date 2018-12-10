import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [AlertComponent],
  exports: [AlertComponent],
  imports: [
    CommonModule, NgbModule
  ],
  providers: [AlertService]
})
export class AlertModule { }
