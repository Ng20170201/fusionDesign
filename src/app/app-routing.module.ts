import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {path:'',component:HeaderComponent, children:[
    {path:"home", component:HomeComponent},
    {path:"table", component:TableComponent},
    {path:"university", component:UniversityComponent}
  ]},
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
