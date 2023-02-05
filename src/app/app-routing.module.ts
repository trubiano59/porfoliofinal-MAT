import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { WorkComponent } from './components/work/work.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path:'work', component:WorkComponent },
  {path:'experiencia', component:ExperienceComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }