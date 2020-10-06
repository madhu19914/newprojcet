import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'sucess'
})
export class SucessPipe implements PipeTransform {

  transform(value: any, ...args: any): any{

    const Array = _.uniqBy(value,'launch_success');
    
    return Array;
  }

}
