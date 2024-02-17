import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { FooderComponent } from './component/fooder/fooder.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule
  ]
})
export class LayoutModule { }
