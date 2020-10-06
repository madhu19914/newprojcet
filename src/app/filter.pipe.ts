import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], filterString:string,propName: string): any {
    if(value.length === 0 || filterString === '' || filterString=== undefined || filterString === 'All'){
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item)
      }
  }
  return resultArray;
  }
}
