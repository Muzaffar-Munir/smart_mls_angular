import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertiesCreateComponent } from './properties-create/properties-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: PropertiesListComponent
    },
    {
        path: 'properties-create',
        component: PropertiesCreateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
