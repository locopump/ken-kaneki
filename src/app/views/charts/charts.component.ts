import { Component, OnInit } from '@angular/core';
import {ChartsService} from '../../services/services.index';

@Component({
  selector: 'kenk-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  genderLikes = {
      labels: [],
      data: [0,0,0],
      type: 'doughnut',
      leyenda: 'Likes por género'
  };

  genderVisitors: any = {
      labels: [],
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      type: 'doughnut',
      leyenda: 'Nro de Visitantes por género'
  };

  marcasCategoria: any = {
      labels: [],
      datasets: [
        {
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          label: 'Categorías',
          backgroundColor: 'rgba(255,99,132,0.6)',
          borderColor: 'rgba(255,99,132,1)',
          hoverBackgroundColor: 'rgba(255,99,132,0.8)',
          hoverBorderColor: 'rgba(255,99,132,1)',
        }
        ],
      type: 'bar',
      leyenda: 'Nro de marcas por categoría'
  };

  constructor(
    // tslint:disable-next-line:variable-name
    public __chartService: ChartsService
  ) {
  }

  ngOnInit() {
    this.cargarGeneros();
    this.cargarVisitorGender();
    this.cargarMarcasCategoria();
  }

  cargarGeneros() {
    return this.__chartService.cargarGeneros()
      .subscribe( (resp: any) => {
        const labels = resp.data.map(({gender}) => gender);
        const data = resp.data.map(({marcas_con_like}) => marcas_con_like);

        this.genderLikes = { ...this.genderLikes, labels, data };
      });
  }

  cargarVisitorGender() {
    return this.__chartService.cargarVisitorGender()
      .subscribe( (resp: any) => {
        this.genderVisitors.labels = (resp.data).map((label) => label.genero);
        this.genderVisitors.data = (resp.data).map((valor) => valor.total_visitantes);
      });
  }

  cargarMarcasCategoria() {
    return this.__chartService.cargarMarcasCategoria()
      .subscribe( (resp: any) => {
        this.marcasCategoria.labels = resp.data.map((label) => label.categoria);
        this.marcasCategoria.datasets = [{
          data: (resp.data).map((valor) => valor.total_marcas),
          label: 'Categorías',
          backgroundColor: 'rgba(255,99,132,0.6)',
          borderColor: 'rgba(255,99,132,1)',
          hoverBackgroundColor: 'rgba(255,99,132,0.8)',
          hoverBorderColor: 'rgba(255,99,132,1)',
        }];
      });
  }

}
