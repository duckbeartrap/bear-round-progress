import { NgModule } from '@angular/core';
import { BearRoundProgressComponent } from './bear-round-progress.component';
import { CommonModule } from '@angular/common';
import { BearRoundProgressService } from './bear-round-progress.service';


@NgModule({
  declarations: [BearRoundProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [BearRoundProgressComponent],
  providers: [
    BearRoundProgressService
  ]
})
export class BearRoundProgressModule { }
