import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    return (new Date(value)).toLocaleDateString('fa-IR');
  }

}
