import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DashboardComponent, AboutComponent, MyProfileComponent, ProjectsComponent],
  // Services responsible for DB and Api calls.
  providers: [DashboardService]
})
export class AdminModule { }
