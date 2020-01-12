import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './student/list/list.component';
import{ListComponents} from './material/list/list.component'
import { ViewComponents } from './material/view/view.component';
import { ViewComponent } from './student/view/view.component';
import { AddNewUserComponent } from './student/add-new-user/add-new-user.component';


const routes: Routes = [
  {path:'student/list',component:ListComponent},
  {path : 'material/list',component:ListComponents},
  {path : 'student/view/:id',component:ViewComponent},
  {path : 'material/view/:id',component:ViewComponents},
  {path:'student/add new user',component:AddNewUserComponent},
  {path : '',redirectTo:"student/list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
