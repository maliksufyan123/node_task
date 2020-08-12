import { Component, Input } from '@angular/core';
import { CarsResult } from '../car';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 car:any;
  @Input()
  result: CarsResult = null;

  @Input()
  selectedQuarter: string = 'Q1';

  @Input()
  quarterOptions: string[] = [];

  constructor() { }
}
