import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FuseSharedModule } from './../../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './properties-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PropertiesListComponent],
  imports: [
    CommonModule,
     FuseSharedModule,
     MatIconModule,
     MatTableModule,
     MatPaginatorModule,
    RouterModule,
    MatButtonModule
  ]
})
export class PropertiesListModule { }
