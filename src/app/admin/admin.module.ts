import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    AboutComponent,
    DashboardComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent, AboutComponent, MyProfileComponent],
  // Services responsible for DB and Api calls.
  providers: [DashboardService] 
})
export class AdminModule { }
