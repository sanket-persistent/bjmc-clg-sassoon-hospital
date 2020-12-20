import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { AwardsAndAchievementsComponent } from './awards-and-achievements/awards-and-achievements.component';
import { ResearchPublicationsComponent } from './research-publications/research-publications.component';


@NgModule({
  declarations: [ActivitiesComponent, AwardsAndAchievementsComponent, ResearchPublicationsComponent],
  imports: [
    CommonModule,
    AcademicsRoutingModule
  ]
})
export class AcademicsModule { }
