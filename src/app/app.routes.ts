import { Routes } from '@angular/router';
import { AuthComponent } from './+pages/auth/ui/auth.component';
import { AdminsComponent } from './+pages/auth/ui/admins/admins.component';

export const routes: Routes = [
    {path:'login',component:AuthComponent},
    {path:'admins',component:AdminsComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
