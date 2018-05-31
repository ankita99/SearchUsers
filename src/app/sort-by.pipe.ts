import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {


  transform(array: Array<string>, path: string[], order: number): Array<string> {

    if (!array || !path || !order) return array;

    return array.sort((a: any, b: any) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      return a > b ? order : order * (- 1);
})
  }
}
