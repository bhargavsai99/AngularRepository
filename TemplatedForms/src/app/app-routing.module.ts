import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';
import { HomeComponent } from './home/home.component';


const routes: Routes=[
  {path:'',redirectTo:'/home',pathMatch:'ful'},
  {path:'home',component:HomeComponent},
  {path:'register',component:TemplatedformsComponent},
  {path:'login',component:ReactiveformsComponent},

{
  path:'**',component:NotfoundComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
