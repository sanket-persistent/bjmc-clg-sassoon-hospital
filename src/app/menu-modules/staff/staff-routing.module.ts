import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NonTeachingStaffComponent } from "./non-teaching-staff/non-teaching-staff.component";
import { TeachingStaffComponent } from "./teaching-staff/teaching-staff.component";

const routes: Routes = [
  {
    path: "teaching",
    component: TeachingStaffComponent,
  },
  {
    path: "non-teaching",
    component: NonTeachingStaffComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
