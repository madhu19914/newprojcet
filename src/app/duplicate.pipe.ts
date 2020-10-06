import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'duplicate',
  pure:false

})
export class DuplicatePipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    const uniqueArray = _.uniqBy(value,'launch_year');
    
    return uniqueArray;
  }
}
