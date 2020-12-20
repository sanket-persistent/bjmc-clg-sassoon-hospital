import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { UgStudentsComponent } from './ug-students/ug-students.component';
import { PgStudentsComponent } from './pg-students/pg-students.component';


@NgModule({
  declarations: [UgStudentsComponent, PgStudentsComponent],
  imports: [
    CommonModule,
    AdmissionsRoutingModule
  ]
})
export class AdmissionsModule { }
