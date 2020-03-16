import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'kenk-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  // Doughnut
  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [];
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
