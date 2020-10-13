import { Component, OnInit, Input } from '@angular/core';
import { IConfig } from './bear-round-progress.interface';
import { BearRoundProgressService } from './bear-round-progress.service';

@Component({
  selector: 'br-bear-round-progress',
  templateUrl: `./bear-round-progress.component.html`,
  styleUrls: ['./bear-round-progress.component.scss']

})
export class BearRoundProgressComponent implements OnInit {

  @Input() config: IConfig = this.roundProgressService.getDefaultConfig();
  
  progressPercentage: number = 100;
  offset: any = {
    total: 0,
    current: 0,
  };

  constructor(private roundProgressService: BearRoundProgressService) { }

  ngOnInit(): void {
    this.progressPercentage = this.roundProgressService.getPercentage(this.config.currentNumber, this.config.maxNumber);
    this.offset = this.roundProgressService.getOffset(this.progressPercentage, this.config.radius);
    this.offset.current = this.offset.total;
  }

  ngAfterViewInit(): void {
    setTimeout(()=> this.offset = this.roundProgressService.getOffset(this.progressPercentage, this.config.radius), 500);
  }
}
