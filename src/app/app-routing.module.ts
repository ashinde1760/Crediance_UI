import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HeaderModule } from './header/header.module';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    loadChildren:()=>AuthModule
  },
  {
    path:"header",
    loadChildren:()=> HeaderModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
