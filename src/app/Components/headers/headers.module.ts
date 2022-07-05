import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { RouterModule } from '@angular/router';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { UserManagementComponent } from './navbar/user-management/user-management.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    NgxDocViewerModule  ,
    PdfViewerModule,
    DocumentEditorContainerAllModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavbarComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
          },
          {
            path: 'usermng',
            component: UserManagementComponent,
          }
        ],
      },
    ]),
  ],
  exports: [NavbarComponent],
})
export class HeadersModule {}
