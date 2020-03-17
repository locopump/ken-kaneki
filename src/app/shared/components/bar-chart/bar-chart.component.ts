import {Component, Input, OnInit} from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartType, ChartDataSets} from 'chart.js';

@Component({
  selector: 'kenk-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  // Bar
  @Input('chartLabels') barChartLabels: Label = [];
  @Input('chartData') barChartData: ChartDataSets[] = [];
  @Input('chartType') barChartType: ChartType = 'bar';

  constructor() { }

  ngOnInit() {
  }

}
