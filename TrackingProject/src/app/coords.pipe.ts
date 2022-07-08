import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coords'
})
export class CoordsPipe implements PipeTransform {

  transform(value:any): unknown {
    return "x-coords="+value.x +","+"y-coords="+value.y;
  }

}
