import { Routes } from '@angular/router';
import { AuthComponent } from './+pages/auth/ui/auth.component';
import { AdminsComponent } from './+pages/admins/admins.component';
import { adminsGuard } from './+shared/+services/guards/admins/admins.guard';
import { BooksComponent } from './+pages/books/ui/books.component';
import { MembersComponent } from './+pages/members/ui/members.component';
import { BorrowsComponent } from './+pages/borrows/ui/borrows.component';
import { LibrariansComponent } from './+pages/librarians/ui/librarians.component';
import { HomeComponent } from './+pages/home/ui/home.component';
import { WorkersComponent } from './+pages/workers/workers/workers.component';
import { Auth2Component } from './+pages/auth2/ui/auth2.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login-admins',component:AuthComponent},
    {path:'login-workers',component:Auth2Component},
    {path:'admins',canActivate:[adminsGuard],component:AdminsComponent,children:[
        {path:'books',component:BooksComponent},
        {path:'members',component:MembersComponent},
        {path:'borrows',component:BorrowsComponent},
        {path:'librarians',component:LibrariansComponent},
        {path:'',redirectTo:'books',pathMatch:'prefix'}
    ]},
    {path:'workers',canActivate:[adminsGuard],component:WorkersComponent,children:[
        {path:'books',component:BooksComponent},
        {path:'members',component:MembersComponent},
        {path:'borrows',component:BorrowsComponent},
        {path:'',redirectTo:'books',pathMatch:'prefix'}
    ]},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',redirectTo:'home'}
];
