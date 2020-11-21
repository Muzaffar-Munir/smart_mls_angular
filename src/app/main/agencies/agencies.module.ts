import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesCreateModule } from './agencies-create/agencies-create.module';
import { FuseSharedModule } from './../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesComponent } from './agencies.component';



@NgModule({
  declarations: [AgenciesComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    AgenciesRoutingModule,
    AgenciesCreateModule
  ]
})
export class AgenciesModule { }
