import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesCreateModule } from './properties-create/properties-create.module';
import { PropertiesListModule } from './properties-list/properties-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    PropertiesCreateModule,
    PropertiesListModule
  ]
})
export class PropertiesModule { }
