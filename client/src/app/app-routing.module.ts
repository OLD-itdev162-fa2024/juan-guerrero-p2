import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts/:id', component: ViewPostComponent},
  {path: 'create', component: CreatePostComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];
=======

const routes: Routes = [];
>>>>>>> activity-6

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
