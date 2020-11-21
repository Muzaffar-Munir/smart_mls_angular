import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseSharedModule } from './../../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesCreateComponent } from './properties-create.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PropertiesBasicInfoComponent } from './properties-basic-info/properties-basic-info.component';
import { MatSelectModule } from '@angular/material/select';
import { PropertiesCharacteristicsComponent } from './properties-characteristics/properties-characteristics.component';
import { PropertiesFeaturesComponent } from './properties-features/properties-features.component';
import { PropertiesSalesComponent } from './properties-sales/properties-sales.component';
import { PropertiesPrivateInfoComponent } from './properties-private-info/properties-private-info.component';



@NgModule({
  declarations: [PropertiesCreateComponent, PropertiesBasicInfoComponent, 
    PropertiesCharacteristicsComponent, PropertiesFeaturesComponent,
     PropertiesSalesComponent, PropertiesPrivateInfoComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    MatTabsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class PropertiesCreateModule { }
