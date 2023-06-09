import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, limit?: number): string{
    return value.substring(0,limit) + '...';
  }

}
