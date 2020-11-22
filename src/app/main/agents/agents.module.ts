import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FuseSharedModule } from './../../../@fuse/shared.module';
import { AgentsRoutingModule } from './agents-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { AgentsCreateModule } from './agents-create/agents-create.module';



@NgModule({
  declarations: [AgentsComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AgentsRoutingModule,
    AgentsCreateModule
  ]
})
export class AgentsModule { }
