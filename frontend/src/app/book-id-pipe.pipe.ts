import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookIdPipe'
})
export class BookIdPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
