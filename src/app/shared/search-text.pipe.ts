import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchTextPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return Object.keys(it).some(k => it[k].includes(searchText.toLowerCase()));
    });
  }
}
