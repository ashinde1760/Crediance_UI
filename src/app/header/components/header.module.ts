import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HomeComponent } from './navbar/home/home.component';
import { CommonModule } from '@angular/common';



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
          path:'',
          component:NavbarComponent,
          children:[
            {
              path:'home',
              component:HomeComponent
            }
          ]
        }
    ]
    )
  ]
})
export class HeaderModule { }
