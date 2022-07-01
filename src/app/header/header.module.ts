import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/navbar/home/home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(
      [
        {
          path:"",
          component:NavbarComponent,
          children:[
            {
              path:"home",
              component:HomeComponent
            }
          ]
        }
    ]
    )
  ]
})
export class HeaderModule { }
