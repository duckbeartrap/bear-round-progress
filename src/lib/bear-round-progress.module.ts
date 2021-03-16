import { NgModule } from '@angular/core';
import { BearRoundProgressComponent } from './bear-round-progress.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BearRoundProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [BearRoundProgressComponent]
})
export class BearRoundProgressModule { }
