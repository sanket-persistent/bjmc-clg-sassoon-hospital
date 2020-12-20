import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HostelComponent } from "./hostel/hostel.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  {
    path: "results",
    component: ResultsComponent,
  },
  {
    path: "hostel",
    component: HostelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsCornerRoutingModule {}
