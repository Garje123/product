import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter((ele:any)=>{
      return ele.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

}
