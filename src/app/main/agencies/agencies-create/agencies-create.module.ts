import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FuseSharedModule } from './../../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesCreateComponent } from './agencies-create.component';
import { AgencyContactComponent } from './agency-contact/agency-contact.component';
import { AgencyFiscalDataComponent } from './agency-fiscal-data/agency-fiscal-data.component';



@NgModule({
  declarations: [AgenciesCreateComponent, AgencyContactComponent, AgencyFiscalDataComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class AgenciesCreateModule { }
