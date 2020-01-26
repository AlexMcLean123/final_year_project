import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextPipe } from '../customtext.pipe';
import { CountryFilterPipe } from '../countryPipe.pipe';



@NgModule({
  declarations: [
    CustomTextPipe,
    CountryFilterPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CommonModule,
    CustomTextPipe,
    CountryFilterPipe
  ]
})
export class SharedModule { }
