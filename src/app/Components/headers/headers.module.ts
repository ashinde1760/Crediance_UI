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
import { MasterDataMngComponent } from './navbar/master-data-mng/master-data-mng.component';
import { DocUploadComponent } from './navbar/master-data-mng/InnerComponents/doc-upload/doc-upload.component';
import { ViewTrackingSheetComponent } from './navbar/master-data-mng/InnerComponents/view-tracking-sheet/view-tracking-sheet.component';
import { ViewOfferLetterComponent } from './navbar/master-data-mng/InnerComponents/view-offer-letter/view-offer-letter.component';
import { ViewBankStatementComponent } from './navbar/master-data-mng/InnerComponents/view-bank-statement/view-bank-statement.component';
import { ViewSalarySlipComponent } from './navbar/master-data-mng/InnerComponents/view-salary-slip/view-salary-slip.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    UserManagementComponent,
    MasterDataMngComponent,
    DocUploadComponent,
    ViewTrackingSheetComponent,
    ViewOfferLetterComponent,
    ViewBankStatementComponent,
    ViewSalarySlipComponent
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
          },
          {
            path:'mastermng',
            component:MasterDataMngComponent,
            children:[
              {
                path:'uploadDocument',
                component:DocUploadComponent
              },
              {
                path:'viewTS',
                component:ViewTrackingSheetComponent
              },
              {
                path:'viewOL',
                component:ViewOfferLetterComponent
              },
              {
                path:'viewBS',
                component:ViewBankStatementComponent
              },
              {
                path:'viewSS',
                component:ViewSalarySlipComponent
              }
            ]
          },
          
        ],
      },
    ]),
  ],
  exports: [NavbarComponent],
})
export class HeadersModule {}
