import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kenk-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  graficos: any = {
    genderLikes: {
      labels: ['F', 'M', 'o'],
      data: [51, 0, 0],
      type: 'doughnut',
      leyenda: 'Likes por género'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
