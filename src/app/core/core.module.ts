import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './nav/nav.component';




@NgModule({
  declarations: [
    NavComponent
  ],
  exports:[
    NavComponent,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
})
export class CoreModule { }
