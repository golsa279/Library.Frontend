import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractData'
})
export class ExtractDataPipe implements PipeTransform {

  transform(value: any, field:string): string {
    let result:any=value;
    let fields=field.split('.');
    for (let i=0;i<fields.length; i++)
    {
      result=result[fields[i]];
    }
    return result.toString();
  }

}
