import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BearRoundProgressService } from './bear-round-progress.service';

@Component({
  selector: 'br-bear-round-progress',
  templateUrl: `./bear-round-progress.component.html`,
  styleUrls: ['./bear-round-progress.component.scss']

})
export class BearRoundProgressComponent implements OnInit {

  @Input() currentNumber: number = 60;
  @Input() maxNumber: number = 100;
  @Input() radius: number = 100;
  @Input() gradientStart: string = '#833ab4';
  @Input() gradientEnd: string = '#fcb045';
  @Input() strokeWidth: number = 10;
  @Input() lineCap: string = 'round';
  @Input() backgroundColor: string = '#D9E2E9';

  progressPercentage: number = 100;
  offset: any = {
    total: 0,
    current: 0,
  };

  constructor(private roundProgressService: BearRoundProgressService) { }

  ngOnInit(): void {
    this.calculateProgress();
    this.offset.current = this.offset.total;
  }

  ngOnChanges(): void {
    this.calculateProgress();
  }

  ngAfterViewInit(): void {
    setTimeout(()=> this.offset = this.roundProgressService.getOffset(this.progressPercentage, this.radius), 500);
  }

  calculateProgress(){
    this.progressPercentage = this.roundProgressService.getPercentage(this.currentNumber, this.maxNumber);
    this.offset = this.roundProgressService.getOffset(this.progressPercentage, this.radius);
  }
}
