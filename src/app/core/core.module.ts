import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
  ],
  exports:[
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule
  ],
})
export class CoreModule { }
