import { Pipe, PipeTransform } from '@angular/core';
import { startCase } from 'lodash';

@Pipe({
    name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

    transform(str: string): any {
        console.log(str);
        console.log(startCase(str.toLowerCase()));

        return startCase(str.toLowerCase());
    }

}
