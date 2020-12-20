import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivitiesComponent } from "./activities/activities.component";
import { AwardsAndAchievementsComponent } from "./awards-and-achievements/awards-and-achievements.component";
import { ResearchPublicationsComponent } from "./research-publications/research-publications.component";

const routes: Routes = [
  {
    path: "activities",
    component: ActivitiesComponent,
  },
  {
    path: "awards-and-achievements",
    component: AwardsAndAchievementsComponent,
  },
  {
    path: "research-publications",
    component: ResearchPublicationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicsRoutingModule {}
