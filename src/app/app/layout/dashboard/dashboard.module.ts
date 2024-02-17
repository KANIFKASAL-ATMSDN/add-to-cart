import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FilterPipe } from '../../shared/filter.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
    
  ]
})
export class DashboardModule { }
