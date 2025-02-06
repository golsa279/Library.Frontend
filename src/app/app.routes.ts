import { Routes } from '@angular/router';
import { AuthComponent } from './+pages/auth/ui/auth.component';
import { AdminsComponent } from './+pages/admins/admins.component';
import { adminsGuard } from './+shared/+services/guards/admins.guard';
import { BooksComponent } from './+pages/books/ui/books.component';
import { MembersComponent } from './+pages/members/members.component';
import { BorrowsComponent } from './+pages/borrows/borrows.component';
import { DashboardComponent } from './+pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'login',component:AuthComponent},
    {path:'admins',canActivate:[adminsGuard],component:AdminsComponent,children:[
        {path:'books',component:BooksComponent},
        {path:'members',component:MembersComponent},
        {path:'borrows',component:BorrowsComponent},
        {path:'dashboard',component:DashboardComponent},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'}
    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
