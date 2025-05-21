import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: false
})
export class CustomPipe implements PipeTransform {

  transform(array:any[]): any {
    if(array.includes('t')){
      return array[0].toUpperCase()
    }
    return '123'
  }

}
