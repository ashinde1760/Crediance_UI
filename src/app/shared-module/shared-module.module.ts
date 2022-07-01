import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    CardModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModuleModule { }
