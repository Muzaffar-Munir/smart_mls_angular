import { LoginModule } from 'app/main/authentication/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';


const routes = [
    // {
    //     path     : 'coming-soon',
    //     component: ComingSoonComponent
    // }
];

@NgModule({
    declarations: [

    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        LoginModule,
        FuseSharedModule,
        FuseCountdownModule
    ]
})
export class AuthenticationModule
{
}
