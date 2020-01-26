import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'countryFilterPipe'
})
export class CountryFilterPipe implements PipeTransform{
    transform(sessions: any[], searchTerm: string ): any[]{
        if(! sessions || !searchTerm){
            return sessions;
        }

        return sessions.filter(session =>
            session.country.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!== -1)
    }
}
