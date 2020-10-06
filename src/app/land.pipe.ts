import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'land'
})
export class LandPipe implements PipeTransform {

  transform(value: any, ...args: any): any{
    const landArray = _.uniqBy(value, 'launch_success');
     return landArray;
  }

}
