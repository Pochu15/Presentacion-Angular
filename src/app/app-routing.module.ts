import { PostEjemploComponent } from './pages/post-ejemplo/post-ejemplo.component';
import { GetEjemploComponent } from './pages/get-ejemplo/get-ejemplo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'get',
    component: GetEjemploComponent
  },
  {
    path: 'post',
    component: PostEjemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
