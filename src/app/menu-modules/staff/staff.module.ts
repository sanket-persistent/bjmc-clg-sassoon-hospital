import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';


@NgModule({
  declarations: [TeachingStaffComponent, NonTeachingStaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
