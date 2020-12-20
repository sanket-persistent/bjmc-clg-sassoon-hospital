import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArchivesComponent } from "./archives/archives.component";
import { JournalsComponent } from "./journals/journals.component";
import { ResearchSocietyComponent } from "./research-society/research-society.component";
import { VideosAndPptsComponent } from "./videos-and-ppts/videos-and-ppts.component";

const routes: Routes = [
  {
    path: "journals",
    component: JournalsComponent,
  },
  {
    path: "videos-and-ppt",
    component: VideosAndPptsComponent,
  },
  {
    path: "research-society",
    component: ResearchSocietyComponent,
  },
  {
    path: "archives",
    component: ArchivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
