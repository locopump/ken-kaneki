import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
      {
        titulo: 'Menú',
        icono: 'mdi mdi-gauge',
        submenu: [
          { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-gauge'},
          { titulo: 'Reportes', url: '/progress', icono: 'mdi mdi mdi-book-open-variant'},
          { titulo: 'Gráficos', url: '/graficos', icono: 'mdi mdi mdi-file-chart'},
        ]
      },
    ];
  constructor() { }
}
