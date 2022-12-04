import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcDate',
  pure: true,
})
export class UtcDatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    var d1 = new Date();
    return d1.toUTCString();
  }

}
