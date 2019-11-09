import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'CustomTextPipe'
})

export class CustomTextPipe implements PipeTransform{
    transform(value: string): string {
        if (!value){
         return null   
        } 
        let newVal = value.replace(/[^a-zA-Z ]/g, "")
        return newVal
      }
}