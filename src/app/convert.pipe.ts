import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): number {
    console.log(value);
    console.log(targetUnits);

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Unknown target units');
    }
  }
}
