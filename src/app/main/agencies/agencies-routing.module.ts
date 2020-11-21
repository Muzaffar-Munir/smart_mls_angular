import { AgenciesComponent } from './agencies.component';
import { AgenciesCreateComponent } from './agencies-create/agencies-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: AgenciesComponent
    },
    {
        path: 'create',
        component: AgenciesCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgenciesRoutingModule { }
