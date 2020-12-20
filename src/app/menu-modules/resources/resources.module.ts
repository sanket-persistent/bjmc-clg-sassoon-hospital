import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { JournalsComponent } from './journals/journals.component';
import { VideosAndPptsComponent } from './videos-and-ppts/videos-and-ppts.component';
import { ResearchSocietyComponent } from './research-society/research-society.component';
import { ArchivesComponent } from './archives/archives.component';


@NgModule({
  declarations: [JournalsComponent, VideosAndPptsComponent, ResearchSocietyComponent, ArchivesComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
