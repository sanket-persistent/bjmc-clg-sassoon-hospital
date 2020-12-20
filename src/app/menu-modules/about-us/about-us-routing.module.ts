import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommitteeComponent } from "./committee/committee.component";
import { DeansComponent } from "./deans/deans.component";
import { HistoryComponent } from "./history/history.component";
import { OrganogramComponent } from "./organogram/organogram.component";
import { RecognitionComponent } from "./recognition/recognition.component";
import { UniversityComponent } from "./university/university.component";

const routes: Routes = [
  {
    path: "deans",
    component: DeansComponent,
  },
  {
    path: "organogram",
    component: OrganogramComponent,
  },
  {
    path: "history",
    component: HistoryComponent,
  },
  {
    path: "committee",
    component: CommitteeComponent,
  },
  {
    path: "university",
    component: UniversityComponent,
  },
  {
    path: "recognition",
    component: RecognitionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
