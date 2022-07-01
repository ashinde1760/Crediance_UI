import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(
      [
        {
          path:"",
          component:LoginComponent
        }
    ]
    )
  ]
})
export class AuthModule { }
