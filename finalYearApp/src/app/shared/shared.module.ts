import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextPipe } from '../customtext.pipe';



@NgModule({
  declarations: [
    CustomTextPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CommonModule,
    CustomTextPipe
  ]
})
export class SharedModule { }
