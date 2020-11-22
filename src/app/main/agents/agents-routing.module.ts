import { AgentsCreateComponent } from './agents-create/agents-create.component';
import { AgentsComponent } from './agents.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: AgentsComponent
    },
    {
        path: 'create',
        component: AgentsCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentsRoutingModule { }
