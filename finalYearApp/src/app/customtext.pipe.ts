import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'CustomTextPipe'
})

export class CustomTextPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return null
        }
        if(value.match("&#039;")){
            let newVal = value.replace("&#039;", "'")
            return newVal

        }
        if(value.match("&#8217;")){
            let newVal = value.replace("&#8217;", "'")
            return newVal

        }
        if(value.match("&amp;")){
            let newVal = value.replace("&amp;", "&")
            return newVal
        }
        if(value.match("&quot;")){
            let newVal = value.replace("&quot;", "\"")
            return newVal
        }
        else return value
    }
}