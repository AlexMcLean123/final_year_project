import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'CustomTextPipe'
})

export class CustomTextPipe implements PipeTransform{
    transform(value: string): string {
        let newVal = value.replace(/[^a-zA-Z \']/g, ' ',)
        return newVal
      }
}