import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule
  ],
  exports:[
    CommonModule,
    CardModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule
  ]
})
export class SharedModuleModule { }
