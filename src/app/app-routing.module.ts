import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:name', component: ProjectDetailComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'error/:type', component: ErrorComponent },
  { path: '**', redirectTo: '/error/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
