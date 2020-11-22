import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseSharedModule } from './../../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsCreateComponent } from './agents-create.component';
import { AgentsContactComponent } from './agents-contact/agents-contact.component';
import { AgentsOtherDataComponent } from './agents-other-data/agents-other-data.component';



@NgModule({
  declarations: [AgentsCreateComponent, AgentsContactComponent, AgentsOtherDataComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatTabsModule,
    MatIconModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AgentsCreateModule { }
