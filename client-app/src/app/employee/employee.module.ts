import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent} from './employee-list/employee-list.component';
import { EmployeeCreateComponent} from './employee-create/employee-create.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeListComponent, EmployeeCreateComponent],
  providers: [EmployeeService]
})
export class EmployeeModule { }
