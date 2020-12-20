import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PgStudentsComponent } from "./pg-students/pg-students.component";
import { UgStudentsComponent } from "./ug-students/ug-students.component";

const routes: Routes = [
  {
    path: "ug-students",
    component: UgStudentsComponent,
  },
  {
    path: "pg-students",
    component: PgStudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionsRoutingModule {}
