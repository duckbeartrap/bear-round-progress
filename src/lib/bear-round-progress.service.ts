import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BearRoundProgressService {

  constructor() { }

  getPercentage(current, max){
    return current * 100 / max;
  }

  getOffset(percentage, radius){
    let totalOffset = Math.floor(2 * Math.PI * radius);
    let currentOffset = Math.floor(totalOffset - (totalOffset * percentage) / 100);

    return {
      total: totalOffset,
      current: currentOffset
    }
  }
}
