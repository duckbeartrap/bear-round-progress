import { Injectable } from '@angular/core';
import { IConfig } from './bear-round-progress.interface';

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

  getDefaultConfig(){
    const defaultConfig = {
      currentNumber: 60,
      maxNumber: 100,
      radius: 100,
      gradientStart: '#833ab4',
      gradientEnd: '#fcb045'
    }
    return defaultConfig;
  }
}
